import {v4 as uuid4} from 'uuid';
// 暴露一个获取uuid的函数
export const getUUID = () => {
  // 先判断本地有没有uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN');
  if(!uuid_token){
    // 生成
    uuid_token = uuid4();
    // 保存到本地
    localStorage.setItem('UUIDTOKEN',uuid_token);
  }
  return uuid_token;
}