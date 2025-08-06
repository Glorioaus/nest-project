import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 这是一个异步函数，用于启动我们的Nest.js应用
async function bootstrap() {
  // NestFactory.create()会创建一个Nest应用实例。
  // AppModule是应用的根模块，Nest.js用它来组织整个应用结构。
  const app = await NestFactory.create(AppModule);

  // 让应用监听在3000端口，等待HTTP请求。
  await app.listen(3000);
}

// 调用bootstrap函数，启动应用。
bootstrap();