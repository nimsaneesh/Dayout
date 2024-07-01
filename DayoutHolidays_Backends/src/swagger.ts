// src/swagger/swagger.ts

import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Adventure Packages API',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/*.ts'], // Include all route files
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  
  export default swaggerSpec;
