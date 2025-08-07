import { Controller, Dependencies, Get, Post, Param, Req } from '@nestjs/common';
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

@Controller('cats')
// 在这个特殊的Babel项目配置中，任何使用了参数装饰器（如@Param）的控制器，
// 都需要@Dependencies()来触发参数的注入，即使它没有构造函数依赖。
@Dependencies()
export class CatsController {
  /**
   * 创建新的猫咪记录
   * @returns {string} 创建成功的消息
   */
  @Post()
  create() {
    return 'This action adds a new cat';
  }

  /**
   * 获取所有猫咪列表
   * @returns {string} 简单的返回消息
   */
  @Get()
  findAll1() {
    return '111';
  }

  /**
   * 获取特定品种的猫咪
   * @returns {string} 品种相关的消息
   */
  @Get('breed')
  findAll() {
    return 'This action returns all cats';
  }

  /**
   * 使用路由参数获取特定ID的记录
   * @param {string} id - 从URL中捕获的ID
   * @returns {string} 包含ID的消息
   */
  @Get('abcd/:id')
  findOne(@Param('id') id) {
    debugger
    console.log('请求的ID:', id);
    console.log('请求的ID:', id);
    return `This action returns a record with id: ${id}`;
  }
}