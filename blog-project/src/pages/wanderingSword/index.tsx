import { Layout } from 'antd'
import { useState } from 'react'
import Markdown from 'react-markdown'
import { useMount } from 'react-use'
import wanderingSword from '../../data/articles/wanderingSword.md?raw'
import './index.scss'

const { Sider, Content } = Layout

export default function WanderingSword() {
  const [md, setMD] = useState('')

  useMount(() => {
    setMD(wanderingSword)
  })

  return (
    <Layout className="home">
      <Sider className="menu">
        {/* <Anchor
          //   style={{ color: '#fff' }}
          affix={false}
          items={[
            {
              key: '1',
              href: '#components-anchor-demo-basic',
              title: 'Basic demo',
            },
            {
              key: '2',
              href: '#components-anchor-demo-static',
              title: 'Static demo',
            },
            {
              key: '3',
              href: '#api',
              title: 'API',
              children: [
                {
                  key: '4',
                  href: '#anchor-props',
                  title: 'Anchor Props',
                },
                {
                  key: '5',
                  href: '#link-props',
                  title: 'Link Props',
                },
              ],
            },
          ]}
        /> */}
      </Sider>
      <Layout className="main">
        <Content>
          <Markdown>{md}</Markdown>
        </Content>
      </Layout>
    </Layout>
  )
}
