import { useEffect, useState } from 'react'
import persona5_royal from '../../assets/persona5_royal.png'
import Checkbox from '../../components/checkbox'
import p5r from '../../data/json/p5r.json'
import './index.scss'

type GuideItem = {
  key: string
  date: string
  week: string
  day: string | string[]
  after_school: string | string[]
  night: string | string[]
  remark: string | string[]
}

type CheckModel = { [key: string]: string[] }

const P5RGuides: GuideItem[] = p5r

function formatEl(origin: string | string[], key: string) {
  if (Array.isArray(origin)) {
    return origin.map((item, index) => <p key={`${key}-${index + 1}`}>{item}</p>)
  } else {
    return origin
  }
}

export default function Persona5Royal() {
  const [checks, setChecks] = useState<CheckModel>(() => {
    const data = localStorage.getItem('P5RCHECKS')
    if (data) {
      const response = JSON.parse(data) as CheckModel
      return response
    }
    return {}
  })

  useEffect(() => {
    const data = JSON.stringify(checks)
    localStorage.setItem('P5RCHECKS', data)
  }, [checks])

  const dochecked = (key: string, time: string, checked: boolean) => {
    console.log(key, time, checked)
    let checkItem = checks[key]
    if (!checkItem) {
      checkItem = []
    }
    if (checked && !checkItem.includes(time)) {
      checkItem.push(time)
    }
    if (!checked) {
      checkItem.splice(checkItem.indexOf(time), 1)
    }
    if (checkItem.length === 0) {
      delete checks[key]
      setChecks({ ...checks })
    } else {
      setChecks({ ...checks, [key]: checkItem })
    }
  }

  return (
    <div className="main">
      <div className="content">
        <div className="title">女神异闻录5皇家版 攻略</div>
        <div className="cover">
          <img src={persona5_royal} width="100%" alt="cover" />
        </div>
        <div className="list">
          {P5RGuides.map((item) => {
            const { key, date, week, day, after_school, night, remark } = item

            let dayChecked = false
            let afterSchoolChecked = false
            let nightChecked = false
            const checked = checks[key]
            if (checked) {
              if (checked.includes('day')) {
                dayChecked = true
              }
              if (checked.includes('after_school')) {
                afterSchoolChecked = true
              }
              if (checked.includes('night')) {
                nightChecked = true
              }
            }
            const allChecked = dayChecked && afterSchoolChecked && nightChecked

            if (allChecked) {
              return (
                <div className={`guide-title${allChecked ? ' decoration' : ''}`} key={key}>
                  <Checkbox
                    keyId={`${key}-all`}
                    checked={allChecked}
                    onChange={(checked) => {
                      if (!checked) {
                        delete checks[key]
                        setChecks({ ...checks })
                      }
                    }}
                  />
                  {date}(星期{week})
                </div>
              )
            }

            return (
              <div className={`guide${allChecked ? ' decoration' : ''}`} key={key}>
                <div className="flex bb">
                  <div className="w100 br m5 subtitle center">
                    <Checkbox
                      keyId={`${key}-all`}
                      checked={allChecked}
                      onChange={(checked) => {
                        if (checked) {
                          setChecks({ ...checks, [key]: ['day', 'after_school', 'night'] })
                        }
                      }}
                    />
                    日期
                  </div>
                  <div className="f1 m5">
                    {date}(星期{week})
                  </div>
                </div>
                <div>
                  <div className="flex bb">
                    <div className={`f1 br m5 subtitle${dayChecked ? ' decoration' : ''}`}>
                      <Checkbox
                        keyId={`${key}-day`}
                        checked={dayChecked}
                        onChange={(checked) => {
                          dochecked(key, 'day', checked)
                        }}
                      />
                      早晨/上午/白天/下午
                    </div>
                    <div className={`f1 br m5 subtitle${afterSchoolChecked ? ' decoration' : ''}`}>
                      <Checkbox
                        keyId={`${key}-afterSchool`}
                        checked={afterSchoolChecked}
                        onChange={(checked) => {
                          dochecked(key, 'after_school', checked)
                        }}
                      />
                      放学后
                    </div>
                    <div className={`f1 m5 subtitle${nightChecked ? ' decoration' : ''}`}>
                      <Checkbox
                        keyId={`${key}-night`}
                        checked={nightChecked}
                        onChange={(checked) => {
                          dochecked(key, 'night', checked)
                        }}
                      />
                      晚上
                    </div>
                  </div>
                  <div className="flex bb">
                    <div className={`f1 br m5${dayChecked ? ' decoration' : ''}`}>
                      {formatEl(day, key)}
                    </div>
                    <div className={`f1 br m5${afterSchoolChecked ? ' decoration' : ''}`}>
                      {formatEl(after_school, key)}
                    </div>
                    <div className={`f1 m5${nightChecked ? ' decoration' : ''}`}>
                      {formatEl(night, key)}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w100 br m5 subtitle center">备注</div>
                  <div className="f1 m5">{formatEl(remark, key)}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
