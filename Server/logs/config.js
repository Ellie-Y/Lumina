const log4js = require('log4js');
const path = require('path');

log4js.configure({
  appenders: {
    sql: {
      type: "datefile", // When log files are backed up beyond size, the date is added to the suffix name
      filename: path.resolve(__dirname, "sql", "logging.log"), // Output 
      layout: {
        type: "pattern",
        pattern: "[%d{dd-MM-yyyy hh:mm:ss}] [%p] %c - %m%n",
      },
      maxLogSize: 1024 * 1024,
      keepFileExt: true,
    },
    default: {
      type: "stdout",
    },
  },
  categories: {
    sql: {
      appenders: ["sql"], // This category uses the configuration of export sql to write logs
      level: "all",
    },
    default: {
      appenders: ["default"],
      level: "all",
    },
  },
});

process.on('exit', () => {
  log4js.shutdown(); 
});

const defaultLogger = log4js.getLogger();
const sqlLogger = log4js.getLogger('sql');

module.exports = {
  defaultLogger,
  sqlLogger
}

