import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  baseURL:'http://localhost:8888/api',
  timeout:5000,
})
service.interceptors.request.use()//请求拦截器
service.interceptors.response.use((res)=>{
  // console.log(res);
  // return res.data.data
  const {success,data,message}=res.data
  if(success){
    return data
  }
  Message.error(message)
  return Promise.reject(new Error(message))
},
function(error){
  Message.error('系统异常')
  return Promise.reject(error)
}
)//响应拦截器

export default service//导出axios实例