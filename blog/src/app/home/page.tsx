import Menu from "@/components/menu"
import List from "@/components/list"
import './page.scss'

export default function Home() {
    return (
        <div className="home">
            <div className="left">
                <Menu />
            </div>
            <div className="main">
                <List />
            </div>
            <div className="right">
                <Menu />
            </div>
        </div>
    )
}
