module.exports = {
  async execute(payload) {
    // Simulación por ahora
    return {
      message: 'Archivo procesado correctamente',
      file: payload.file || null
    };
  },

  async getStatus() {
    return {
      status: 'idle'
    };
  },

  async getHistory() {
    return [];
  }
};
