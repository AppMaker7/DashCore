// DashCore speed preference module.
// This stores a target practice speed only. It does NOT alter game speed.
window.DashCoreModules = window.DashCoreModules || {};
window.DashCoreModules.speed = {
  id: 'speed-preference',
  title: 'Speed preference',
  min: 0.5,
  max: 2.0,
  status: 'companion-setting-only'
};