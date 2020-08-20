import axios from 'axios'

// 获取当前城市的数据的封装
export const getCurCity= () =>{
  // 先存在本地
  const localCity = JSON.parse(localStorage.getItem('hkzf_city'))
  if(!localCity) {
    // 没有当前定位的城市
    return new Promise((resolve,reject)=>{
      const curCity = new window.BMap.LocalCity();
       try {
        curCity.get(async (res) => {
          const data = await axios.get(
            `http://localhost:8080/area/info?name=${res.name}`
          );
          localStorage.setItem('hkzf_city',JSON.stringify(data.data.body))
          resolve(data.data.body)
          });   
       } catch (e) {
         reject(e)
       }
    })
  }
  // 如果有这个城市
  return Promise.resolve(localCity)
}