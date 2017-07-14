/**
 * Created by li on 2017/7/14.
 */
const koa = require('koa');
const Router = require('koa-router');
const app = new koa();

let home = new Router();


home.get('/', async (ctx) => {
    let html = `<ul>
                    <li><a href="/page/helloworld">/page/helloworld"></a></li>
                    <li><a href="/page/404">/page/helloworld"></a></li>
               </ul>`;
    ctx.body = html;
});

app.listen(3000);

console.log(`server started on port 3000`);