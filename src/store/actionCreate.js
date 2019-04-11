import {ONINIT,ONCHANGE,ONSUB,ONDEL} from './actionType.js';
import axios from 'axios';
export const ONCHANGEACTION=(value)=>({
	type:ONCHANGE,
	value:value
})
export const ONSUBACTION=()=>({
	type:ONSUB
})
export const ONDELACTION=(index)=>({
	type:ONDEL,
	index:index
})
export const ONINITACTION=(data)=>({
	type:ONINIT,
	data:data
})
export const ONINITACTIONN=()=>{
	return (dispatch)=>{
		axios.get('http://localhost:3000/api/list.json')
          .then((res)=>{
                 const data=res.data;
                 const action=ONINITACTION(data);
                  dispatch(action)
            })
          .catch((e)=>{console.log(e)})
	}
}