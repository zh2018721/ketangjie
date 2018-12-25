import axios from 'axios'


export function getCourseList(params){
    return new Promise((resolve,reject)=>{
        axios.post(`/Json/index.php?act=Microportal.allnewList`,params).then(res=>{
            resolve(res.data.allnewList)
        })
        .catch(error=>{
            reject(error)
        })
    })
    
}
