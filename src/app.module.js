import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService } from './app.service';

// @Module() 是一个装饰器，它告诉Nest.js这个类是一个模块。
// 模块是组织Nest.js应用的基本单位。
@Module({
  // imports数组用于导入其他模块，这里我们没有导入任何其他模块。
  imports: [],
  // controllers数组定义了这个模块所包含的控制器。
  // 控制器负责处理进来的HTTP请求。
  controllers: [AppController, CatsController],
  // providers数组定义了这个模块所提供的服务。
  // 服务通常包含业务逻辑，可以被控制器或其他服务注入和使用。
  providers: [AppService],
})
export class AppModule {}