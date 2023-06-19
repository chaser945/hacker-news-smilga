import { useReducer, useContext, createContext, useEffect } from "react"
import reducer from "./reducer"
import axios from "axios"

const AppContext = createContext()

const initialState = {
  loading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
}

const baseUrl = "http://hn.algolia.com/api/v1/search?query="

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchNews = async () => {
    let url = ""
    if (state.page === 0) {
      url = `${baseUrl}${state.query}`
    }
    if (state.page > 0) {
      url = `${baseUrl}${state.query}&page=${state.page}`
    }

    dispatch({ type: "SET_LOADING_TRUE" })

    try {
      const response = await axios(url)
      console.log(response.data)
      dispatch({
        type: "SET_HITS",
        payload: {
          hits: response.data.hits,
          page: response.data.page,
          nbPages: response.data.nbPages,
        },
      })
    } catch (error) {
      console.log(error.response)
      dispatch({ type: "SET_LOADING_FALSE" })
    }
  }

  useEffect(() => {
    fetchNews()
  }, [state.query, state.page])

  const removeNews = (id) => {
    dispatch({ type: "REMOVE_NEWS", payload: { id } })
  }

  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: { query } })
  }

  const setPage = (pageParam) => {
    dispatch({ type: "SET_PAGE", payload: { pageParam } })
  }

  return (
    <AppContext.Provider
      value={{ ...state, removeNews, handleSearch, setPage }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
