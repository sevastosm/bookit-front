import 'babel-polyfill'
import axios from 'axios'
import { appUrl } from "../config";

let params1 = {SearchValue: "test",BOption: 1,DFrom: "12/31/2015",DTo: "12/31/2018",TakeRecs:0,Id:0,LastId:0}

export const  fetchMembers= async ()=>{
    const response = await axios.get(`http://bookitapi.netshops.gr/members/obj`,
    {
        params: {
            pars: params1
        }
      })
    return response
}


// fetchMembers().then((response:any)=>{
//     console.info(response) })