const defaultstate={
	value:'',
	list:[]
}
export default (state=defaultstate,action)=>{
	if (action.type==='oninit') {
		const newstate=JSON.parse(JSON.stringify(state));
			  newstate.list.push(...action.data);
			  return newstate;
	};
	if (action.type==='onchange') {
		const newstate=JSON.parse(JSON.stringify(state));
			  newstate.value=action.value;
			  return newstate;
	};
	if (action.type==='onsub') {
		const newstate=JSON.parse(JSON.stringify(state));
			  newstate.list.push(newstate.value);
			  newstate.value='';
			  return newstate;
	};
	if (action.type==='ondel') {
		const newstate=JSON.parse(JSON.stringify(state));
			  newstate.list.splice(action.index,1);
			  return newstate;
	};
	return state;
}