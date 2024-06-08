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
      bordered={false}
      hoverable
      onClick={() => navigate(item.url)}
      cover={<img style={{ height: '200px', objectFit: 'cover' }} src={item.image} alt="cover" />}>
      <Space className="tags" size={[0, 8]} wrap>
        {item.tags.map((tag) => (
          <Tag className="tag" color="#2a9d8f">
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
