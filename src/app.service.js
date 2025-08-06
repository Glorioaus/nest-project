import { Injectable } from '@nestjs/common';

// @Injectable()装饰器将这个类标记为一个可注入的服务。
// 这意味着它可以被其他类（如控制器）通过依赖注入的方式使用。
@Injectable()
export class AppService {
  // 这是一个简单的方法，返回一个字符串。
  // 在实际应用中，这里会包含更复杂的业务逻辑，
  // 例如从数据库查询数据、调用其他API等。
  getHello() {
    return 'Hello World!';
  }
}