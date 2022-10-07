import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/BookSLice";

const store = configureStore({
      reducer: {
            booksReducer: bookReducer
      }
})

export default store;