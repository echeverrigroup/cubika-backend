const { getModule } = require('./moduleRegistry');

/**
 * Ejecuta una acción de un módulo
 */
async function execute(moduleName, action, payload) {
  const module = getModule(moduleName);

  if (!module) {
    throw new Error(`Module "${moduleName}" not found`);
  }

  const method = module[action];

  if (!method) {
    throw new Error(
      `Action "${action}" not found in module "${moduleName}"`
    );
  }

  try {
    const result = await method(payload);

    return {
      success: true,
      data: result
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = {
  execute
};
