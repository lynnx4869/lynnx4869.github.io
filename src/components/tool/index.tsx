import search from '../../assets/search.svg'
import './index.scss'

export default function Tool() {
  return (
    <div className="tools">
      <div className="search">
        <label className="title">搜索</label>
        <input className="input" placeholder="输入..." />
        <button className="button">
          <img src={search} alt="search" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
