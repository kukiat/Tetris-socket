export const AddAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD',
      payload: 8888
    })
  } 
}