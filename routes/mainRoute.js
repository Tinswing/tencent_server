const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('/', async ctx => {
	ctx.body = '掷群雄下酒宴';
});

router.post('/alipay/notify', async ctx => {
	console.log(ctx.request.body);
	ctx.body = {msg: 'get you message'}
	// ctx.body = {success: true}
})

module.exports = router.routes();