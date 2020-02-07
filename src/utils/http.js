import axios from 'axios'
import QS from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// let headers = 'application/x-www-form-urlencoded'

const http = {
    post(url,params){
       return new Promise((resolve,reject)=>{
           axios.post(url,QS.stringify(params))
           .then(res=>{
               resolve(res)
           })
           .catch(err=>{
               reject(err.data)
           })
       })
    },
    get(url,params){
        return new Promise((resolve,reject)=>{
            axios.get(url,{params : params})
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err.data)
            })
        })
    }
}

export default http