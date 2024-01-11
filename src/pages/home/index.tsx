import List from '../../components/list'
import Menu from '../../components/menu'
import Tool from '../../components/tool'
import './index.scss'

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
        <Tool />
      </div>
    </div>
  )
}
