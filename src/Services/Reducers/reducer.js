import { Add_To_cart } from "../constants"


const initialState = {
  cardData:[]
}

 const cardItems = (state=initialState,action)=>{
  switch(action.type){
    case Add_To_cart:
      return{
        ...state,
        cardData:action.data 
      }
    default:
      return state 
  }
}

export default cardItems