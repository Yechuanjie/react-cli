// 根据build命令指定的环境，引入不同配置
const config = require('./env.' + process.env.REACT_APP_ENV)

export default config.default as EnvConfig
