import IndexList from '../../data'
import Article from './article'

export default function List() {
  return (
    <>
      {IndexList.map((item) => (
        <Article key={item.url} item={item} />
      ))}
    </>
  )
}
