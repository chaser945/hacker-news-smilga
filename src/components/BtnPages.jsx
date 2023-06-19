import React from "react"
import { useGlobalContext } from "../context"
export function BtnPages({ page, nbPages }) {
  const { setPage, loading } = useGlobalContext()
  return (
    <div className="btn-pages-wrapper">
      <button
        className="prev"
        disabled={loading}
        onClick={(e) => setPage(e.target.textContent)}
      >
        prev
      </button>
      <p>
        {page + 1}/{nbPages + 1}
      </p>
      <button
        className="next"
        disabled={loading}
        onClick={(e) => setPage(e.target.textContent)}
      >
        next
      </button>
    </div>
  )
}
