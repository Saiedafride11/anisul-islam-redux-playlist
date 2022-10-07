const { createStore, combineReducers } =  require("redux")

// product constant
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart constant
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = 'ADD_CART_ITEMS';

// product state
const initialProductState = {
      products: [ "sugar", "salt" ],
      numberOfProducts: 1
}

// cart state
const initialCartState = {
      cart: [ "rice" ],
      numberOfCart: 1
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

// cart state
const getCarts = () => {
      return {
            type: GET_CART_ITEMS
      }
}
const addCarts = (cart) => {
      return {
            type: ADD_CART_ITEMS,
            payload: cart
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

// cartReducer
const cartReducer = (state = initialCartState, action) => {
      switch (action.type) {
            case GET_CART_ITEMS:
                  return {
                        ...state
                  }
            case ADD_CART_ITEMS:
                  return {
                        cart: [...state.cart, action.payload],
                        numberOfCart: state.numberOfCart + 1
                  }
            default: 
                  return state
      }
}

// // product
// const storeProduct = createStore(productReducer);
// //cart
// const storeCart = createStore(cartReducer);

// //product
// storeProduct.subscribe( () => {
//       console.log(storeProduct.getState());
// })
// //cart
// storeCart.subscribe( () => {
//       console.log(storeCart.getState());
// })
// //product
// storeProduct.dispatch(getProducts())
// storeProduct.dispatch(addProducts("Milk"))
// // cart
// storeCart.dispatch(getCarts())
// storeCart.dispatch(addCarts("Meet"))

// RootReducer
const rootReducer = combineReducers({
      productsReducer: productReducer,
      cartsReducer: cartReducer
})
const storeRoot = createStore(rootReducer);
storeRoot.subscribe( () => {
      console.log(storeRoot.getState());
})
storeRoot.dispatch(getProducts())
storeRoot.dispatch(addProducts("Milk"))
storeRoot.dispatch(getCarts())
storeRoot.dispatch(addCarts("Meet"))