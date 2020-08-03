import {constant} from '../expand/api';
import axios from "axios";
import qs from 'qs'

export function request(method, url, data = {}, Authorization) {
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Authorization": Authorization,
  }
  return new Promise((resolve, reject) => {
    axios({
      baseURL: constant.base_url,
      method: method,
      url: url,
      data: qs.stringify(data),
      // headers,
      withCredentials: true,
    //   headers: headers
    })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log("网络连接错误");
        reject(err);
      });
  });
}