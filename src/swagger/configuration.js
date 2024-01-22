import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDef = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Books Library',
      version: '1.0.0',
      description: 'Swagger Documentation for books on Express JS'
    }
  },
  apis: ['src/**/*.js']
});

export default swaggerDef;
