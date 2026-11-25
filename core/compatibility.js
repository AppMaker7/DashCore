// Compatibility checks are informational only.
// Android app sandboxing prevents this PWA from inspecting or modifying Geometry Dash.
window.DashCoreCompatibility = {
  mode: 'standalone-companion',
  connected: false,
  canInjectIntoGame: false,
  message: 'No game connection detected. This companion cannot inject code into Geometry Dash.'
};