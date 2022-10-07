const { createStore} =  require("redux")

// state: count: 0
// action - increment, decrement, reset
// reducer
// store

// CONSTANTS
const ADD_USER = "ADD_USER";

const initialState = {
      users: ["Kamal"],
      count: 1
}

const addUser = (user) => {
      return {
            type: ADD_USER,
            payload: user
      }
}

// Crating reducer
const userReducer = (state = initialState, action) => {
      switch (action.type) {
            case ADD_USER:
                  return {
                        users: [...state.users, action.payload],
                        count: state.count + 1
                  }
            default:
                  return state

      }
}

// create store
const store = createStore(userReducer);

store.subscribe( () => {
      console.log(store.getState())
})

store.dispatch(addUser("Jamal"));
store.dispatch(addUser("AKash"));