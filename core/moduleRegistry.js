const modules = {};

/**
 * Registra un módulo
 */
function registerModule(name, module) {
  modules[name] = module;
}

/**
 * Obtiene un módulo
 */
function getModule(name) {
  return modules[name];
}

/**
 * Lista módulos disponibles
 */
function getAllModules() {
  return Object.keys(modules);
}

module.exports = {
  registerModule,
  getModule,
  getAllModules
};
