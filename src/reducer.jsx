import { checkPage } from "./utils"

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING_TRUE":
      return { ...state, loading: true }
    case "SET_LOADING_FALSE":
      return { ...state, loading: false }
    case "SET_HITS":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        page: action.payload.page,
        nbPages: action.payload.nbPages - 1,
      }
    case "REMOVE_NEWS":
      return {
        ...state,
        hits: state.hits.filter((hit) => hit.objectID !== action.payload.id),
      }
    case "HANDLE_SEARCH":
      return {
        ...state,
        query: action.payload.query,
        page: 0,
      }
    case "SET_PAGE":
      return {
        ...state,
        page: checkPage(
          action.payload.pageParam === "next" ? state.page + 1 : state.page - 1,
          state.nbPages
        ),
      }
    default:
      throw new Error(`${action.type} is not defined in reducer`)
  }
}
export default reducer
