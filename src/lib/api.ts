const HOST = import.meta.env.VITE_API_HOST;
const APIKEY = import.meta.env.VITE_API_APIKEY;

import axios from 'axios';

export default async function call(params:any){
    let url         = params?.url || null;
    let method      = params?.method || 'get';
    let data        = params?.data || null;

    let config:any  = {
                    method,
                    url: `${HOST}/${url}`,
                    timeout: 1000 * 60 * 3, //wait 3 minute
                    headers: { 
                        'Content-Type': 'application/json',
                        "X-API-Key": `${APIKEY}`,
                    },
                };
    if(data){
        config.data = JSON.stringify(data);
    }

    if(params?.headers){
        config.headers = {...config.headers,...params.headers}
    }

    let result  = await axios(config).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error;
    });
    return result;
}