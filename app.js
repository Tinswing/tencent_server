const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const bodyParser = require('koa-bodyparser');

// 解析Post 请求体
app.use(bodyParser());

// 路由
const mainRoute = require('./routes/mainRoute');
router.use('*', mainRoute);
// 配置路由
app.use(router.routes()).use(router.allowedMethods());

const PORT = 80;
app.listen(PORT, (err) => {
	if (err) return console.log(err);
	console.log('running...' + PORT);
});

app.on('error', err => {
	console.log(err);
})