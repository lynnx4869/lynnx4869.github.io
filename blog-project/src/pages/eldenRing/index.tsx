import { Collapse, Image } from 'antd'
import elden_ring from '../../assets/elden_ring.webp'
import eldenRing from '../../data/json/elden_ring.json'
import './index.scss'
import Checkbox from '../../components/checkbox'
import { useEffect, useState } from 'react'

type GuideItem = {
  key: string
  content: string
  children: {
    content: string
    subTitle?: string[]
    children: {
      title: string
      content: string[]
    }[]
  }[]
}

type CheckModel = { [key: string]: string[] }

const ERGuides: GuideItem[] = eldenRing

function formatEl(origin: string[], key: string) {
  return origin.map((item, index) => {
    const subkey = `${key}-${index + 1}`
    if (item.startsWith('/elden_ring')) {
      return <Image key={subkey} height={200} src={item} />
    } else {
      return (
        <p key={subkey} className="text">
          {item}
        </p>
      )
    }
  })
}

export default function EldenRing() {
  const [checks, setChecks] = useState<CheckModel>(() => {
    const data = localStorage.getItem('ELDENRINGCHECKS')
    if (data) {
      const response = JSON.parse(data) as CheckModel
      return response
    }
    return {}
  })

  useEffect(() => {
    const data = JSON.stringify(checks)
    localStorage.setItem('ELDENRINGCHECKS', data)
  }, [checks])

  const dochecked = (key: string, childKey: string, checked: boolean) => {
    console.log(key, childKey, checked)
    let checkItem = checks[key]
    if (!checkItem) {
      checkItem = []
    }
    if (checked && !checkItem.includes(childKey)) {
      checkItem.push(childKey)
    }
    if (!checked) {
      checkItem.splice(checkItem.indexOf(childKey), 1)
    }
    if (checkItem.length === 0) {
      delete checks[key]
      setChecks({ ...checks })
    } else {
      setChecks({ ...checks, [key]: checkItem })
    }
  }

  return (
    <div className="elden-ring-main">
      <div className="content">
        <div className="title">艾尔登法环 攻略</div>
        <div className="cover">
          <img src={elden_ring} width="100%" alt="cover" />
        </div>
        <div className="list">
          {ERGuides.map((item) => {
            const { key, content, children } = item

            return (
              <Collapse
                className="mt20"
                key={key}
                items={[
                  {
                    key,
                    label: content,
                    children: (
                      <Collapse
                        items={children.map((child, index) => {
                          const { content, subTitle, children } = child
                          const childKey = `${key}-${index}`
                          let allChecked = false
                          if (checks[childKey]) {
                            allChecked = checks[childKey].length === children.length
                          }
                          return {
                            key: childKey,
                            className: allChecked ? 'decoration' : '',
                            label: (
                              <>
                                <Checkbox
                                  keyId={childKey}
                                  checked={allChecked}
                                  onChange={(checked: boolean) => {
                                    if (checked) {
                                      setChecks({
                                        ...checks,
                                        [childKey]: children.map((item, itemIndex) => {
                                          return `${childKey}-${itemIndex}`
                                        }),
                                      })
                                    } else {
                                      delete checks[childKey]
                                      setChecks({ ...checks })
                                    }
                                  }}
                                />
                                {content}
                              </>
                            ),
                            children: (
                              <>
                                {subTitle &&
                                  subTitle.map((item, itemIndex) => {
                                    return (
                                      <p key={`title-${childKey}-${itemIndex}`} className="sub">
                                        {item}
                                      </p>
                                    )
                                  })}
                                <Collapse
                                  accordion
                                  items={children.map((item, itemIndex) => {
                                    const itemKey = `${childKey}-${itemIndex}`
                                    let checked = false
                                    if (checks[childKey]) {
                                      checked = checks[childKey].includes(itemKey)
                                    }
                                    return {
                                      key: itemKey,
                                      className: checked ? 'decoration' : '',
                                      label: (
                                        <>
                                          <Checkbox
                                            keyId={itemKey}
                                            checked={checked}
                                            onChange={(checked: boolean) => {
                                              dochecked(childKey, itemKey, checked)
                                            }}
                                          />
                                          {item.title}
                                        </>
                                      ),
                                      children: formatEl(item.content, itemKey),
                                    }
                                  })}
                                />
                              </>
                            ),
                          }
                        })}
                      />
                    ),
                  },
                ]}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
