import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller()装饰器将这个类标记为一个控制器。
// 你可以在括号里传入一个路径前缀，例如 @Controller('users')
@Controller()
// @Dependencies()装饰器用于声明这个类的依赖。
// 在这个例子中，AppController依赖于AppService。
@Dependencies(AppService)
export class AppController {
  // 构造函数，通过参数注入AppService的实例。
  // 这是Nest.js实现依赖注入(DI)的方式。
  constructor(appService) {
    this.appService = appService;
  }

  @Get() // 装饰器将这个方法标记为一个HTTP GET请求的处理器。
  // 当有GET请求访问到这个控制器的根路径时，这个方法会被调用。
  getHello() {
    // 调用AppService中的getHello方法，并返回结果。
    return this.appService.getHello();
  }
}