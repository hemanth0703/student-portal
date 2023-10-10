let intialData = [
    
]

function favouriteReducer(state = intialData, action){
    if(action.type == "FAV_STUDENT"){
        state.push(action.payload)
      }
      return state
}

export default favouriteReducer