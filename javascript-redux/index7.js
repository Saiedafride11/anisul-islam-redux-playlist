const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const axios = require('axios');

// const
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILD = 'GET_TODOS_FAILD';
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// state
const initialTodosState = {
      todos: [],
      isLoading: false,
      error: null
}

// action
const getTodosRequest = () => {
      return {
            type: GET_TODOS_REQUEST
      }
}
const getTodosFailed = (error) => {
      return {
            type: GET_TODOS_FAILD,
            payload: error
      }
}
const getTodosSuccess = (todos) => {
      return {
            type: GET_TODOS_SUCCESS,
            payload: todos
      }
}

// reducer
const todosReducer = (state = initialTodosState, action) => {
      switch (action.type) {
            case GET_TODOS_REQUEST:
                  return {
                        ...state,
                        isLoading : true
                  }
            case GET_TODOS_SUCCESS:
                  return {
                        ...state,
                        isLoading : false,
                        todos: action.payload
                  }
            case GET_TODOS_FAILD:
                  return {
                        ...state,
                        isLoading : false,
                        error: action.payload
                  }
            default:
                  return state
      }


      
}

// async data
const fetchData = () => {
      return (dispatch) => {
            dispatch(getTodosRequest);
            axios.get(API_URL)
            .then( res => {
                  // console.log(res.data);
                  const todos = res.data;
                  const title = todos.map( todo => todo.title);
                  // console.log(title);
                  dispatch(getTodosSuccess(title));
            })
            .catch(err => {
                  // console.log(err.message);
                  dispatch(getTodosFailed(err.message));
            })
      }
}

// store 
 const store = createStore(todosReducer, applyMiddleware(thunk));
 store.subscribe( () => {
      console.log(store.getState());
 })
 store.dispatch(fetchData())