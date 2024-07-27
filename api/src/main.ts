import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Gestor de Frotas')
        .setDescription('API para controle e manutenção de frotas de veículos')
        .setVersion('0.1')
        .addTag('veiculos')
        .addTag('motoristas')
        .addTag('movimentos')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    await app.listen(3000);
}
bootstrap();
