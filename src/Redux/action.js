export const addStudent = (data) =>{
  return{
    type: "ADD_STUDENT",
    payload: data
  }
}

export const favStudent = (data) =>{
  return{
    type: "FAV_STUDENT",
    payload: data
  }
}

export const deleteStudent = (data) =>{
  console.log(data)
  return{
    type: "DEL_STUDENT",
    payload: data
  }
}

export const editStudent = (data) =>{
  return{
    type: "EDIT_STUDENT",
    payload: data
  }
}