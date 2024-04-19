const initialState= [];

export const changeTheList =(state=initialState, action)=>{
    if(action.type==="addtolist"){
        return [...state, action.payload];
    }else if(action.type==="removefromlist"){
        let idx= state.findIndex(e=>e.id===action.payload);
        return state.filter(e=>e.id!= action.payload);

    }else if(action.type==="updateCheckbox"){
        let idx= state.findIndex(e=>e.id=== action.payload);
        let val= state[idx].checked;
        let {value, checked, colorcode, id}= state[idx];
        checked=!val;
        console.log([...state.slice(0, idx), {value, checked, colorcode, id}, ...state.slice(idx+1)]);
        return [...state.slice(0, idx), {value, checked, colorcode, id}, ...state.slice(idx+1)]
    }else if(action.type==="handleAllCompleted"){
        return state.map(e=>e.checked=true)
    }else if(action=="handleClearCompleted"){
        return state.filter(e=>e.checked==false);
    }
    else{
        return state;
    }
}