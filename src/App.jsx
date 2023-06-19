import { BtnPages } from "./components/BtnPages"
import Form from "./components/Form"
import LoadingSpinner from "./components/LoadingSpinner"
import NewsCard from "./components/NewsCard"
import { useGlobalContext } from "./context"

const App = () => {
  const { loading, hits, page, nbPages } = useGlobalContext()
  // console.log(loading)
  return (
    <section className="app">
      <h1 className="title">HACKER NEWS</h1>
      <Form />
      <BtnPages page={page} nbPages={nbPages} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="news-wrapper">
          {hits.map((hit) => {
            const { objectID } = hit
            return <NewsCard key={objectID} hit={hit} />
          })}
        </div>
      )}
      {!loading && hits.length < 1 && <h1>Please! Provide a valid input.</h1>}
    </section>
  )
}
export default App
