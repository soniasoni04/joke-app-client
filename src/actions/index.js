import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const GET_JOKE = 'GET_JOKE'

function getJoke(payload) {
  return {
    type: GET_JOKE,
    payload: payload
  }
}

export const getRandomJoke = () => (dispatch, getState) => {

    request(`${baseUrl}/jokes`)
    .then(response => {
        console.log("response : ", typeof response.body)

        
    //   const JokesKeys = Object.keys(data)
    //   console.log("JokesKeys: ", JokesKeys)
      
      const action = getJoke(response.body)

      dispatch(action)
    })
    .catch((error) => {
      console.error(error);
    });
}

//post your joke

export const POST_JOKE = 'POST_JOKE'

function postUrJoke(payload) {
  return {
    type: POST_JOKE,
    payload: payload
  }
}

export const postJoke = (data) => (dispatch) => {

    console.log("entered value of your joke : ", data)

    console.log('your posted joke from action-index : ', data)
    request.post(`${baseUrl}/jokes`)
        .send(data)
        .then(response => {
            console.log('response : ', response.body)
            const action = postUrJoke(response.body)

            dispatch(action)
        })
        .catch(console.error)
}


