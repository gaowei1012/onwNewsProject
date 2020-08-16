import constant from '../expand/api';
import axios from "axios";

const { base_url } = constant

export function request(url, method, data) {

  return new Promise((resolve, reject) => {
    axios({
      baseURL: base_url,
      method: method,
      url: url,
      data: data,
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