import head from '../../assets/head.jpg'
import home from '../../assets/home.svg'
import archive from '../../assets/archive.svg'
import search from '../../assets/search.svg'
import './index.scss'

export default function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <img className="logo-img" src={head} alt="logo" />
      </div>
      <div className="name">月夜胜邪 LYninG</div>
      <div className="sign">
        莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？ 一蓑烟雨任平生。
      </div>
      <div className="menu-list">
        <div className="item">
          <img className="item-logo" src={home} alt="home" />
          首页
        </div>
        <div className="item">
          <img className="item-logo" src={archive} alt="archive" />
          归档
        </div>
        <div className="item">
          <img className="item-logo" src={search} alt="search" />
          搜索
        </div>
      </div>
    </div>
  )
}
