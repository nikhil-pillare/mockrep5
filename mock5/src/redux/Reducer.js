import { REQUEST, SUCCESS , FAILURE} from "./ActionTypes";

const initialState ={
    contacts:[],
    isLoading: false,
    isError: false
}


const Reducer=(state=initialState, action)=>{
    switch (action.type) {
        case REQUEST:
          return {...state, isLoading:true} 
        case SUCCESS:
            return {...state, isLoading:false, contacts: action.payload}    
        case FAILURE:
            return{
                ...state, isError:true
            }
        default:
            return state
    }
}

export default Reducer