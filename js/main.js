const places = [
  { name: 'Lagos, Nigeria', label: 'Nigeria', tag: 'Where I\u2019m from', c: [3.38, 6.52], side: 1,
    d: 'Home. I grew up and went to school here, surrounded by many communities and cultures.' },
  { name: 'Singapore', label: 'Singapore', tag: 'A wider world', c: [103.82, 1.35], side: -1,
    d: 'I traveled here for a literature competition while still in school in Nigeria. It opened my eyes to a new country, culture, history, and way of life.' },
  { name: 'Rabun County, Georgia', label: 'Georgia', tag: 'Boarding school abroad', c: [-83.4, 34.97], side: -1,
    d: 'I attended a private boarding school here as an international student, learning to live and learn far from home.' },
  { name: 'Worcester, Massachusetts', label: 'Massachusetts', tag: 'Where I study and build', c: [-71.8, 42.26], side: 1,
    d: 'At WPI I study CS, lead in NSBE and ASA, work in admissions, and ship projects with teams.' },
  { name: 'Redmond, Washington', label: 'Washington', tag: 'Where I shipped', c: [-122.12, 47.67], side: -1,
    d: 'Microsoft Explore internship: research, design, specs, and front-end code for real users.' }
];

document.getElementById('yr').textContent = new Date().getFullYear();

const list = document.getElementById('places');
places.forEach((p, i) => {
  const li = document.createElement('li');
  li.dataset.i = i;
  li.innerHTML = `${p.img ? `<img src="${p.img}" alt="${p.alt || p.name}" loading="lazy">` : ''}<small>0${i + 1} &middot; ${p.tag}</small><b>${p.name}</b><p>${p.d}</p>`;
  list.appendChild(li);
});

const cap = document.getElementById('cap');
const setOn = (i, on) => {
  document.querySelectorAll(`[data-i="${i}"]`).forEach(el => el.classList.toggle('on', on));
  if (on) cap.textContent = `${places[i].name}: ${places[i].d}`;
};
const only = i => places.forEach((_, k) => setOn(k, k === i));
list.querySelectorAll('li').forEach(li => {
  li.addEventListener('mouseenter', () => setOn(li.dataset.i, true));
  li.addEventListener('mouseleave', () => setOn(li.dataset.i, false));
});

if (window.d3 && window.topojson) {
  fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(r => r.json())
    .then(world => {
      const W = 960, H = 500;
      const svg = d3.select('#map-svg').attr('viewBox', `0 0 ${W} ${H}`);
      const proj = d3.geoNaturalEarth1().fitSize([W, H], { type: 'Sphere' });
      const path = d3.geoPath(proj);

      svg.append('path').attr('class', 'land')
        .attr('d', path(topojson.feature(world, world.objects.land)));

      for (let i = 0; i < places.length - 1; i++) {
        svg.append('path').attr('class', 'arc').attr('d', path({
          type: 'LineString', coordinates: [places[i].c, places[i + 1].c]
        }));
      }

      places.forEach((p, i) => {
        const [x, y] = proj(p.c);
        const g = svg.append('g').attr('class', 'pin').attr('data-i', i)
          .attr('transform', `translate(${x},${y})`).attr('tabindex', 0)
          .on('mouseenter focus', () => setOn(i, true))
          .on('mouseleave blur', () => setOn(i, false))
          .on('click', () => only(i));
        g.append('circle').attr('r', 12);
        g.append('text').attr('dy', 4).text(i + 1);
        g.append('text').attr('class', 'lbl').attr('dy', 5)
          .attr('dx', p.side * 19).style('text-anchor', p.side > 0 ? 'start' : 'end')
          .text(p.label || p.name);
      });
    })
    .catch(() => document.getElementById('map-svg').remove());
} else {
  document.getElementById('map-svg').remove();
}

// Play the journey
let timer;
document.getElementById('play').addEventListener('click', () => {
  clearInterval(timer);
  let i = 0;
  const step = () => {
    if (i >= places.length) { clearInterval(timer); places.forEach((_, k) => setOn(k, false)); return; }
    only(i++);
  };
  step();
  timer = setInterval(step, 3000);
});

// Ask me about
document.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c === b));
  document.getElementById('ans').textContent = b.dataset.a;
}));

// Scroll reveal
document.documentElement.classList.add('js');
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.block, .row').forEach(el => { el.classList.add('reveal'); io.observe(el); });
