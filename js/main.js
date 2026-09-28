const places = [
  { name: 'Nigeria', tag: 'Where it started', c: [8, 9.5], side: 1,
    d: 'Born and raised here. It gave me a love for the space where logic meets creativity.' },
  { name: 'Georgia', tag: 'First U.S. home', c: [-83.4, 34.97], side: -1,
    d: 'High school at Rabun Gap-Nacoochee School taught me how to start fresh and build community.' },
  { name: 'Massachusetts', tag: 'Where I build', c: [-71.8, 42.26], side: 1,
    d: 'At WPI I study CS, lead in NSBE and ASA, work in admissions, and ship projects with teams.' },
  { name: 'Washington', tag: 'Where I shipped', c: [-122.12, 47.67], side: -1,
    d: 'Microsoft Explore internship: research, design, specs, and front-end code for real users.' }
];

document.getElementById('yr').textContent = new Date().getFullYear();

const list = document.getElementById('places');
places.forEach((p, i) => {
  const li = document.createElement('li');
  li.dataset.i = i;
  li.innerHTML = `<small>0${i + 1} &middot; ${p.tag}</small><b>${p.name}</b><p>${p.d}</p>`;
  list.appendChild(li);
});

const setOn = (i, on) => {
  document.querySelectorAll(`[data-i="${i}"]`).forEach(el => el.classList.toggle('on', on));
};
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
          .on('mouseleave blur', () => setOn(i, false));
        g.append('circle').attr('r', 12);
        g.append('text').attr('dy', 4).text(i + 1);
        g.append('text').attr('class', 'lbl').attr('dy', 5)
          .attr('dx', p.side * 19).style('text-anchor', p.side > 0 ? 'start' : 'end')
          .text(p.name);
      });
    })
    .catch(() => document.getElementById('map-svg').remove());
} else {
  document.getElementById('map-svg').remove();
}
