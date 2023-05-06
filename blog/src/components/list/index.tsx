import Article from "./article"

export default function List() {
    let articles = [1, 2, 3]
    return (
        <div>
            {articles.map(item => <Article key={item} />)}
        </div>
    )
}