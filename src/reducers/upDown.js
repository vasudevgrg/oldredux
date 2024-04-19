const initialState= [];

export const changeTheList =(state=initialState, action)=>{
    if(action.type==="addtolist"){
        return [...state, action.payload];
    }else if(action.type==="removefromlist"){
        let idx= state.filter(e=>e.id===action.payload);
        console.log(state);
            // return [state.splice(idx,1)];
            return state.pop();

    }else if(action.type=="updateTheList"){
        return 
    }
    else{
        return state;
    }
}