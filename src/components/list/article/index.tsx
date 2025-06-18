import { Card, Space, Tag, Typography } from 'antd'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import calendar from '../../../assets/calendar.svg'
import { ListItem } from '../../../data'
import './index.scss'

const { Title, Text } = Typography
const { Meta } = Card

export default function Article({ item }: { item: ListItem }) {
  const navigate = useNavigate()
  return (
    <Card
      className="article"
      variant="borderless"
      hoverable
      onClick={() => navigate(item.url)}
      style={{
        overflow: 'hidden',
      }}
      styles={{
        cover: {
          height: '200px',
          background: `url(${item.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto',
          backgroundPosition: item.position || 'center',
        },
      }}
      cover={<></>}>
      <Space className="tags" size={[0, 8]} wrap>
        {item.tags.map((tag) => (
          <Tag key={tag} className="tag" color="#2a9d8f">
            {tag}
          </Tag>
        ))}
      </Space>
      <Meta
        title={
          <Title className="title" level={2}>
            {item.title}
          </Title>
        }
        description={<Text className="title">{item.memo}</Text>}
      />
      <div className="date">
        <img src={calendar} alt="calendar" width={20} height={20} />
        <span className="datetime">{dayjs(item.date).format('YYYY-MM-DD')}</span>
      </div>
    </Card>
  )
}
