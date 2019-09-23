import axios from 'axios';

export function deleteOderId(id){
    const url = '/user/delete';
    return axios.post(url,{
        id
    });
}

export function addtianjia(namber,hangye,liulan){
    const url = '/user/addList';
    return axios.post(url,{
        namber,
        hangye,
        liulan
    })
}


export function logins(){
    const url = '/user/addList';
    return axios.post(url)
}