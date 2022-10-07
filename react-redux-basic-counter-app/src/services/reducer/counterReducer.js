import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

const initialCount = { count: 0, numberOfStudent: 2 };

const counterReducer = (state = initialCount, action) => {
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
            case RESET:
                  return {
                        ...state,
                        count: 0
                  }
            default:
                  return state
      }
}

export default counterReducer;