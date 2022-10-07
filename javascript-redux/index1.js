const {createStore} = require('redux');


// defining constent
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
const initialCounterState = {
      count: 0,
}
const initialUserState = {
      users: [{name: "Saied Afride"}]
}

//action ( Object - type, payload)
// INCREMENT COUNTER
const incrementCounter = () => {
      return {
            type: INCREMENT
      }
}
// DECREMENT COUNTER
const decrementCounter = () => {
      return {
            type: DECREMENT
      }
}

const addUser = () => {
      return {
            type: ADD_USER,
            payload: {name: 'Shakil'}
      }
}

// 1. state
// 3. ( increment / decrement ) dispatch action
// 3. reducer
// 4. store - getState(), dispatch(), subscribe()



//crete reducer for function

const counterReducer = (state = initialCounterState, action) => {
      switch (action.type) {
            case INCREMENT:
                  return {
                        ...state,
                        count: state.count + 1
                  }
            case DECREMENT:
                  return {
                        ...state,
                        count: state.count - 1
                  }

            default:
                  return state
      }
}

// create store
const store = createStore(counterReducer);

store.subscribe( () => {
      console.log(store.getState())
})

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());





// ---------- Anisul islam
// npm init -y
// npm install redux
// npm i redux-logger


// state
// action
// action.type
// createStore, combineReducers, applyMiddleware 
// getState
// dispatch
// subscribe
