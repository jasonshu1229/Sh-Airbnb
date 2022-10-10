import axios from "axios";
import { BASE_URL, TIMEOUT } from './config';

class SHRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    
    // 给所有的实例添加响应拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data;
    }, err => {
      return err;
    })
  }
  
  request(config) {
    return this.instance.request(config);
  }
  
  get(config) {
    return this.request({ ...config, method: 'get'});
  }
  
  post(config) {
    return this.request({ ...config, method: 'post'});
  }
}

export default new SHRequest(BASE_URL, TIMEOUT)