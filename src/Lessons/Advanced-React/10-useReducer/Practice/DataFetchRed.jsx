import { useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.state) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const DataFetchRed = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>DataFetchRed</div>;
};
export default DataFetchRed;
