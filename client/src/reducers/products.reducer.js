
export const getAllProdsReducer=(state={products : [] },action)=>{

    switch(action.type){
        case "ReqAllProds" : return{
            loading:true
        }
        case "GotAllProds" : return{
            products:action.payload,
            loading:false
        }
        case "GetProdsFail":return{
            error:action.payload,
            loading:false
        }
        default: return {state}
    }

}


export const getProdsByIdReducer=(state={product : [] },action)=>{

    switch(action.type){
        case "ReqProdsById" : return{
            loading:true
        }
        case "GotProdsById" : return{
            product:action.payload,
            loading:false
        }
        case "GetProdsFailById":return{
            error:action.payload,
            loading:false
        }
        default: return {state}
    }

}