/**
 * Created by li on 2017/7/14.
 */
const koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const koastatic = require('koa-static');
const path = require('path');

const app = new koa();
const home = new Router();

const staticPath = './public';

//ctx.body解析中间件
app.use(bodyparser());
app.use(koastatic(path.join(path.resolve(__dirname,'..'),staticPath)));

home.get('/', async (ctx) => {
    let html = `<ul>
                    <li><a href="/page/helloworld">/page/helloworld"></a></li>
                    <li><a href="/page/404">/page/helloworld"></a></li>
                    <li><a href="/page/login">/page/login"></a></li>
               </ul>`;
    ctx.body = html;
});

//子路由
let page = new Router();
page.get('/404', async (ctx) => {
    ctx.body = '404 page';
}).get('/helloWorld', async ctx => {
    ctx.body = 'helloWorld page!'
}).get('login',async ctx=>{
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
                `;
    if(ctx.method){
        switch (ctx.method){
            case 'GET':
                ctx.body = html;
                break;
            case 'POST':
                ctx.body='post';
                break;
            default:
                ctx.body='default';
                break;
        }
    }
});
//合并子路由
let router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000);

console.log(`server started on port 3000`);