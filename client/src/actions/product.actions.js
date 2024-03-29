import axios from "axios";


export const getAllProds=()=>dispatch=>{

    dispatch({type:"ReqAllProds"})

    axios.get("/products/allprods").then(data=>{
        console.log(data)
        // setProds(data.data)
        dispatch({type:"GotAllProds", payload:data.data})
      }).catch(err=>{
        console.log(err);
        dispatch({type:"GetProdsFail", payload:err});
      });

}


export const getProdsById=(prodId)=>dispatch=>{

    dispatch({type:"ReqProdsById"})
    console.log(prodId,"gpbi param");
    axios.post("/products/getprodsbyid", {prodId}).then(res=>{
        console.log(res.data,"getprodsactionID")
        // setProds(res.data)
        dispatch({type:"GotProdsById", payload:res.data})
      }).catch(err=>{
        console.log("errrr",err);
        dispatch({type:"GetProdsFailById", payload:err});
      });

}