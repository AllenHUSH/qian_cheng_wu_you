module.exports = {
    devServer:{
        // open:true,       // 自动开启
        // host:"127.0.0.1",// 设置 host
        // port:80,         // 设置端口号
        proxy:{          //设置代理
            "/":{
                target:"https://jobs.51job.com",   //代理的网址
                changeOrigin: true,
                pathRewrite:{
                    "^/":""
                }
            }
        }
    }
}