import { Avatar, Typography } from 'antd'
import head from '../../assets/head.jpg'
import './index.scss'

const { Title } = Typography

export default function Menu() {
  return (
    <div className="menu">
      <Avatar src={<img src={head} alt="avatar" />} size={100} />
      <Title className="name">月夜胜邪 LYninG</Title>
      <Title className="sign">
        莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？ 一蓑烟雨任平生。
      </Title>
    </div>
  )
}
