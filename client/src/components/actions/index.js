import types from './types';
import axios from 'axios';

export function signin(cred){
    return dispatch=>{
        axios.post('/auth/signin', cred).then(resp =>{
            console.log('signin request: ', resp);
        });
    }
}