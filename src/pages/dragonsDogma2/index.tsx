import { SendOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Image, Tag, Timeline } from 'antd'
import { useEffect, useState } from 'react'
import dragons_dogma_2 from '../../assets/dragons_dogma_2.webp'
import dragons_dogma_2_logo from '../../assets/dragons_dogma_2_logo.png'
import dragonsDogma2 from '../../data/json/dragons_dogma_2.json'
import './index.scss'

export default function DragonsDogma2() {
  const [checks, setChecks] = useState<string[]>(() => {
    const data = localStorage.getItem('DRAGONSDOGMA2CHECKS')
    if (data) {
      const response = JSON.parse(data) as string[]
      return response
    }
    return []
  })

  useEffect(() => {
    const data = JSON.stringify(checks)
    localStorage.setItem('DRAGONSDOGMA2CHECKS', data)
  }, [checks])

  const doChecked = (key: string) => {
    if (checks.includes(key)) {
      const result = checks.filter((item) => key !== item)
      setChecks(result)
    } else {
      const result = [...checks, key]
      setChecks(result)
    }
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Timeline: {
            dotBg: '#fff',
            tailColor: '#fff',
          },
        },
      }}>
      <div className="dragons-dogma2">
        <div className="content">
          <div className="title">龙之信条2 攻略</div>
          <div className="cover">
            <img src={dragons_dogma_2} width="100%" alt="cover" />
            <img src={dragons_dogma_2_logo} className="cover-icon" width="100%" alt="cover" />
          </div>
          <div className="list">
            {dragonsDogma2.map((item) => {
              const { key, type, title, content } = item

              if (checks.includes(key)) {
                return (
                  <div
                    key={key}
                    style={{
                      marginTop: '20px',
                      cursor: 'pointer',
                    }}
                    onClick={() => doChecked(key)}>
                    {type === 'main' ? (
                      <Tag color="#ff4d4f">主线-已完成</Tag>
                    ) : (
                      <Tag color="#722ED1">支线-已完成</Tag>
                    )}
                    <span
                      style={{
                        textDecoration: 'line-through',
                      }}>
                      {title}
                    </span>
                  </div>
                )
              } else {
                return (
                  <Card
                    key={key}
                    style={{
                      marginTop: '20px',
                      background: 'transparent',
                    }}
                    styles={{
                      header: {
                        background:
                          type === 'main'
                            ? 'linear-gradient(135deg, #ff4d4f, #ff4d4f99)'
                            : 'linear-gradient(135deg, #722ED1, #722ED122)',
                        color: '#fff',
                      },
                      body: {
                        background: 'linear-gradient(135deg, #fff0, #ffffff08)',
                        border: '1px solid #000',
                        transition: 'all .3s',
                        color: '#fff',
                      },
                    }}
                    title={
                      type === 'main' ? (
                        <>
                          <Tag bordered={false} color="error">
                            主线
                          </Tag>
                          {title}
                        </>
                      ) : (
                        <>
                          <Tag bordered={false} color="cyan">
                            支线
                          </Tag>
                          {title}
                        </>
                      )
                    }
                    extra={
                      <Button
                        color="cyan"
                        variant="solid"
                        shape="circle"
                        icon={<SendOutlined />}
                        onClick={() => doChecked(key)}
                      />
                    }
                    variant="borderless">
                    <Timeline
                      items={content.map((message) => {
                        return {
                          children: (
                            <span
                              style={{
                                color: '#fff',
                              }}>
                              {message}
                            </span>
                          ),
                        }
                      })}
                    />
                  </Card>
                )
              }
            })}
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}
