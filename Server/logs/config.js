const log4js = require('log4js');
const path = require('path');

log4js.configure({
  appenders: {    // 出口
    sql: {
      type: 'datefile',   // 日志文件超出大小备份的时候后缀名会加上日期
      filename: path.resolve(__dirname, 'sql', 'logging.log'),  // 出口为当前路径下的 sql 文件夹里面的 logging 文件
      layout: {
        type: 'pattern',
        pattern: '[%d{dd-MM-yyyy hh:mm:ss}] [%p] %c - %m%n'
      },
      maxLogSize: 1024 * 1024,   // 最大1MB
      keepFileExt: true,
    },
    default: {
      type: 'stdout',   // 控制台导出
    }
  },
  categories: {   
    sql: {
      appenders: ['sql'],    // 该分类使用出口 sql 的配置写入日志
      level: 'all'
    },
    default: {
      appenders: ['default'],
      level: 'all'
    }
  }
});

process.on('exit', () => {
  log4js.shutdown();  // 记录完后退出
});

const defaultLogger = log4js.getLogger();
const sqlLogger = log4js.getLogger('sql');

module.exports = {
  defaultLogger,
  sqlLogger
}

