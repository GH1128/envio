// 引入axios
import axios from 'axios'
// 引入qs---将对象数据转UrlEncoding
var instance = axios.create({ baseURL: 'https://api.example.com' });
// Alter defaults after instance has been created 
instance.defaults.headers.common['Authorization'] = "Bearer sk_test_6926954580b4b77f2e1ff77dc92c1fe8b4a5e012";
instance.defaults.baseURL = ' https://api.paystack.co';
// 暴露axios

var ajax = axios.create({ baseURL: 'http://localhost:5000' })

export {
  instance,
  ajax
}
