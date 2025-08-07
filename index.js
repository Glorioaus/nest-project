// 这一行是修复问题的核心。它必须是整个应用程序中第一个被加载的模块。
// 它会全局激活元数据反射API，这样后续Babel在编译装饰器时才能正确附加元数据。
require('reflect-metadata');

// 这一行会动态地将Babel编译功能挂载到Node.js的require上。
// 之后所有被require()的文件都会先经过Babel的实时编译。
require('@babel/register');

// 这一行执行编译后的src/main.js，真正启动Nest.js应用。
require('./src/main');