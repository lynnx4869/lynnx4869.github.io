import Article from './article'
import './index.scss'

export default function List() {
  const articles = [1, 2, 3]
  return (
    <>
      <div className="list">
        {articles.map((item) => (
          <Article key={item} />
        ))}
      </div>
      <div className="pages">
        {articles.map((item) => (
          <span className="page" key={item}>
            {item}
          </span>
        ))}
      </div>
    </>
  )
}
