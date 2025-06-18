import dragons_dogma_2 from '../../assets/dragons_dogma_2.webp'
import dragons_dogma_2_logo from '../../assets/dragons_dogma_2_logo.png'
import './index.scss'

export default function DragonsDogma2() {
  return (
    <div className="dragons-dogma2">
      <div className="content">
        <div className="title">龙之信条2 攻略</div>
        <div className="cover">
          <img src={dragons_dogma_2} width="100%" alt="cover" />
          <img src={dragons_dogma_2_logo} className="cover-icon" width="100%" alt="cover" />
        </div>
        <div className="list"></div>
      </div>
    </div>
  )
}
