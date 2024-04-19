
export const addtolist=(e)=>{
    return {
    type: "addtolist",
    payload:e
}}

export const removefromlist=(e)=>{
    return {
    type: "removefromlist",
    payload:e
    }
}

export const updateCheckbox=(e)=>{
    return{
        type:"updateCheckbox",
        payload:e
    }
}

export const handleAllCompleted=()=>{
    return {
        type:"handleALlCompleted"
    }
};

export const handleClearCompleted=()=>{
    return{
        type:"handleClearCompleted"
    }
}
