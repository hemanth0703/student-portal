let intialData = [
    {
        id:1,
        name :"Hemanth",
        age: 26,
        email:"hemanth.komeri@gmail.com",
        batch: "1"

    }
]

function addStuReducer(state = intialData, action){
  if(action.type == "ADD_STUDENT"){
    state.push(action.payload)
  }else if(action.type == "DEL_STUDENT"){
    const newArr = state.filter((val) =>{
        return val.id != action.payload
    })
    state = [...newArr]
  } else if(action.type == "EDIT_STUDENT"){
    const newArr = state.filter((val) =>{
      return val.id != action.payload.id
  })

  newArr.push(action.payload)
  state = [...newArr]
  }
  return state
}
export default addStuReducer