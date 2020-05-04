const express = require('express')//獲取express框架的模塊
const app = express() //使用這個模塊創建一個實例app
/*
app.get('/', function (req, res) { //註冊我們的一個 / --> 處理函數 function
  res.send('Hello World') // 發送一個數據到客戶端
})
*/
const path = require("path");

//設置跨域訪問
app.all('*', function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.use("/", express.static(path.join(process.cwd(), "www")));
app.listen(3000) //http webserver 的服務器的監聽端口

app.get("/lucky", function(req, res){
	console.log(req.query);
	var ret = 1 + Math.random() * 7;
	ret = Math.floor(ret);
	
	res.send("" + ret);
});