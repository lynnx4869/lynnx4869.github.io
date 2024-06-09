import { Layout } from 'antd'
import List from '../../components/list'
import Menu from '../../components/menu'
import './index.scss'

const { Sider, Content } = Layout

export default function Home() {
  return (
    <div className="main">
      <Layout className="home">
        <Sider className="menu">
          <Menu />
        </Sider>
        <Layout className="main">
          <Content>
            <List />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
