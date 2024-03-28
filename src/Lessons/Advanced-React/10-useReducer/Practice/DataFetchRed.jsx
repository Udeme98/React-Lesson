import { useEffect, useReducer } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const info = await res.json();
        console.log(info.title);
        dispatch({ type: "FETCH_SUCCESS", payload: info.title });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Data Fetching with useReducer Hook</h3>
      {state.loading ? "...Loading" : state.post}
      {state.error ? error : null}
    </div>
  );
};
export default DataFetchRed;
