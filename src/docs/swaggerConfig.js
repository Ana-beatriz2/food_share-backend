const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API FoodShare - Doação de alimentos',
      version: '1.0.0',
      description: 'Documentação...',
    },
    components: {
      securitySchemes: {
          BearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
          },
      },
  },
  security: [
      { BearerAuth: [] }, 
  ],
  },
  apis: ['./src/docs/*.swagger.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
