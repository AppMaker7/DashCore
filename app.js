(() => {
  const $ = (s) => document.querySelector(s);
  const state = { noclip: false, speed: 1 };
  const saved = (() => { try { return JSON.parse(localStorage.getItem('dashcore-profile') || '{}'); } catch { return {}; } })();
  state.noclip = !!saved.noclip;
  state.speed = Number(saved.speed || 1);
  const noclip = $('#noclip-toggle');
  const slider = $('#speed-slider');
  const speedValue = $('#speed-value');
  noclip.checked = state.noclip;
  slider.value = state.speed;
  speedValue.textContent = `${state.speed.toFixed(1)}×`;
  function persist() { localStorage.setItem('dashcore-profile', JSON.stringify(state)); }
  noclip.addEventListener('change', () => { state.noclip = noclip.checked; persist(); });
  slider.addEventListener('input', () => { state.speed = Number(slider.value); speedValue.textContent = `${state.speed.toFixed(1)}×`; persist(); });
  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.page)));
  document.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.go)));
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === id));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === id));
    $('#page-title').textContent = ({dashboard:'Dashboard',mods:'Mod library',profiles:'Profiles',settings:'Settings'})[id] || 'Dashboard';
    window.scrollTo({top:0, behavior:'smooth'});
  }
  $('#save-profile').addEventListener('click', () => { persist(); const btn = $('#save-profile'); btn.textContent = 'Saved ✓'; setTimeout(() => btn.textContent = 'Save settings', 1300); });
  $('#reset-settings').addEventListener('click', () => { state.noclip = false; state.speed = 1; noclip.checked = false; slider.value = 1; speedValue.textContent = '1.0×'; persist(); });
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./service-worker.js').catch(() => {});
})();