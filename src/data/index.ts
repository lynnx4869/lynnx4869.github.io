import elden_ring from '../assets/elden_ring.webp'
import persona5_royal from '../assets/persona5_royal.webp'
import dragons_dogma_2 from '../assets/dragons_dogma_2.webp'

export type ListItem = {
  url: string
  image: string
  title: string
  memo: string
  tags: string[]
  date: number
  position?: string
}

const IndexList: ListItem[] = [
  {
    url: '/persona5_royal',
    image: persona5_royal,
    title: '女神异闻录5皇家版 攻略',
    memo: '由ATLUS倾情奉上，青春RPG系列游戏最新作《P5R》再度登场。主角是因为某些原因转学至“东京”的高中的少年。白天是普通的高中生。放学后则化身为盗取堕落大人们扭曲欲望的怪盗。个性丰富的同伴们渴望的“改变社会”会迎来怎样的结局…？',
    tags: ['日系角色扮演', '剧情丰富', '回合制战斗', '动漫', '单人'],
    date: 1717819200000,
  },
  {
    url: '/elden_ring',
    image: elden_ring,
    title: '艾尔登法环 攻略',
    memo: '艾尔登法环是以正统黑暗奇幻世界为舞台的动作RPG游戏。 走进辽阔的场景与地下迷宫探索未知，挑战困难重重的险境，享受克服困境时的成就感吧。 不仅如此，登场角色之间的利害关系谱成的群像剧，更是不容错过。',
    tags: ['类魂系列', '黑暗奇幻', '开放世界', '角色扮演', '困难'],
    date: 1717819200000,
    position: 'top',
  },
  {
    url: '/dragons_dogma_2',
    image: dragons_dogma_2,
    title: '龙之信条2 攻略',
    memo: '能够响应玩家想像且丰富多彩的动作，以及即使是单人游玩也能享受「与他人一起冒险的乐趣」的游戏体验。 借助最新的画面、物理计算及人工智能，精心编织而成的王道幻想世界。这个世界充满着惊喜和现实感。 与旅伴追随者一起，让我们踏入一场独一无二的冒险吧。',
    tags: ['开放世界', '角色扮演', '动作角色扮演', '奇幻', '单人'],
    date: 1750291200000,
    position: 'top',
  },
]

export default IndexList
