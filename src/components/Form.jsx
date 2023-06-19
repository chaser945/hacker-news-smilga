import { useGlobalContext } from "../context"

const Form = () => {
  const { query, handleSearch } = useGlobalContext()
  return (
    <form className="query-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="react"
        required
      />
      <button type="submit">submit</button>
    </form>
  )
}
export default Form
