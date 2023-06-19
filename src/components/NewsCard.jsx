import { useGlobalContext } from "../context"

const NewsCard = ({ hit }) => {
  const { removeNews } = useGlobalContext()
  const { title, url, author, num_comments, points, objectID: id } = hit
  return (
    <article className="news-card">
      <h3 className="news-title">{title}</h3>
      <p>
        {points} points by {author} | {num_comments} comments
      </p>
      <div className="news-card-btn-wrapper">
        <a href={url} className="read-more" target="_blank">
          Read More
        </a>
        <button className="btn-remove" onClick={() => removeNews(id)}>
          Remove
        </button>
      </div>
    </article>
  )
}
export default NewsCard
