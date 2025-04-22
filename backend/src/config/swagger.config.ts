// src/config/swagger.config.ts
import swaggerJsdoc from 'swagger-jsdoc'

export const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation for my app'
    },
    servers: [
      {
        url: 'http://localhost:8000' // change as needed
      }
    ]
  },
  apis: ['src/routes/*.ts', 'src/index.ts'] // Add more paths if needed
}
