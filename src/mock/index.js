import Mock from 'mockjs'
//用户登录

Mock.mock('/login', 'post', ({body})=>{
  var bodys = JSON.parse(body)
  if(bodys.username == 'admin' && bodys.password == '123'){
    return {code:0,data:{
      token:'12122',
      user:"admin"
    }}
  }else{
    return {code:1,dtat:"失败"}
  }
})

