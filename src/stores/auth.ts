

import { defineStore } from 'pinia';
import call from '@/lib/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    profile: "{}",
    validLogin:false,
    layoutPage:true,
    request:false
  }),
  getters:{
    getProfile : (state:any)=> JSON.parse(state.profile),
    isValidLogin : (state)=> state.validLogin,
    isLayoutPage : (state)=> state.layoutPage,
    isRequest : (state)=> state.request,
  },
  actions: {
    async login(username:string | null, password:string | null, chatId:number=0) {
      try {
        // prod
        this.request=true;
        let params  =   {
                            url     : '/api/verify',
                            method  : 'post',
                            data    : { chat_id:chatId, username, password }
                        }
        let data    = await call(params);
        this.validLogin = data?.status || false;
        if(data?.status) this.profile = JSON.stringify(data.result);
        this.request=false;
      } catch (error) {
        this.request=false;
        console.log(error);
        return error
      }
    },
  },
})
