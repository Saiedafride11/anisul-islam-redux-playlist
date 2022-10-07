const { createStore } =  require("redux")

// product constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';


// product state
const initialProductState = {
      products: [ "sugar", "salt" ],
      numberOfProducts: 1
}


// product state
const getProducts = () => {
      return {
            type: GET_PRODUCTS
      }
}
const addProducts = (product) => {
      return {
            type: ADD_PRODUCT,
            payload: product
      }
}

// productReducer
const productReducer = (state = initialProductState, action) => {
      switch (action.type) {
            case GET_PRODUCTS:
                  return {
                        ...state
                  }
            case ADD_PRODUCT:
                  return {
                        products: [...state.products, action.payload],
                        numberOfProducts: state.numberOfProducts + 1
                  }
            default: 
                  return state
      }
}



const store = createStore(productReducer);

store.subscribe( () => {
      console.log(store.getState());
})


store.dispatch(getProducts())
store.dispatch(addProducts("Milk"))

