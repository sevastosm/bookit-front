import 'babel-polyfill'
import axios from 'axios'
import { appUrl } from "../config";

let params1 = {SearchValue: "",BOption: 0,DFrom: "1/1/2020",DTo: "12/31/2020",TakeRecs:1,Id:'',LastId:0}

export const  fetchMembers= async ()=>{
    const response = await axios.get(`${appUrl}/members/obj`,
    {
        params: {
            pars: params1
        }
      })
    return response
}


export const  AddMember= async (data)=>{

    let member = data
    await axios.post(`${appUrl}/member/register`, member)
      .then(function (response) {
        console.log("res",response);
      })
      .catch(function (error) {
        console.log("err",error);
      });

}