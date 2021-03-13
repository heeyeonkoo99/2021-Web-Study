const Router=require('koa-router');
const postsCtrl=require('./posts/posts.ctrl');


const posts =new Router();

posts.get("/",postsCtrl.list);
posts.post("/",postsCtrl.write);
posts.get("/",postsCtrl.read);
posts.delete("/",postsCtrl.remove);
posts.put("/",postsCtrl.replace);
posts.patch("/",postsCtrl.update);


//라우터를 내보냅니다.
module.exports=posts;