"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://127.0.0.1:4000/',
            'http://localhost:4000/',
            'http://127.0.0.1:4000',
            'http://localhost:4000',
        ],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Gestor de Frotas')
        .setDescription('API para controle e manutenção de frotas de veículos')
        .setVersion('0.1')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
        name: 'Token JWT',
        description: 'Adicione seu token JWT',
    })
        .addSecurityRequirements('bearer')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map