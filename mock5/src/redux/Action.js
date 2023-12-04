import axios from 'axios'

export const userpost=({obj})=> async(dispatch)=>{
    dispatch({type: "REQUEST"})
    try {
        const response = await axios.post('/contact', obj);
        dispatch({ type: "SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FAILURE", payload: error.message });
      }
    
}
export const userEdit=({obj})=>(dispatch)=>{
    dispatch({type: "REQUEST"})
   axios.patch('/users', obj)
   .then((res)=>{
       dispatch({type: "SUCCESS"})
   }) 
   .catch((error)=>{
       dispatch({type: "FAILURE"})
   })
    
}
export const userGet=()=> async(dispatch)=>{
    dispatch({type: "REQUEST"})
   
    try {
        const response = await axios.get('/question');
        dispatch({ type: "SUCCESS", payload: response.data });
        console.log(response.data)
      } catch (error) {
        dispatch({ type: "FAILURE", payload: error.message });
      }
    
}
// export const userDelete=()=>(dispatch)=>{
//     dispatch({type: "REQUEST"})
//    axios.delete('https://redux-server-mfe8.onrender.com/users')
//    .then((res)=>{
//        dispatch({type: "SUCCESS"})
//    }) 
//    .catch((error)=>{
//        dispatch({type: "FAILURE"})
//    })
    
// }
