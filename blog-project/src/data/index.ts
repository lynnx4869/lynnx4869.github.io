import wandering_sword from '../assets/wandering_sword.webp'
import persona5_royal from '../assets/persona5_royal.webp'
import elden_ring from '../assets/elden_ring.webp'

export type ListItem = {
  url: string
  image: string
  title: string
  memo: string
  tags: string[]
  date: number
}

const IndexList: ListItem[] = [
  {
    url: '/wandering_sword',
    image: wandering_sword,
    title: '逸剑风云决 攻略',
    memo: '《逸剑风云决》是一款像素武侠RPG游戏。玩家将扮演一名来自关外辽城的普通少年，因意外卷入江湖纷争而身中剧毒，幸得武当掌门清虚真人出手才得救。自此，你梦想成为一代大侠，正式踏入了中原武林。你的选择将改变整个武林故事，与江湖中各种侠客结交互动，甚至改变他们的命运！',
    tags: ['角色扮演', '武术', '像素图形', '回合制', '策略', '冒险'],
    date: 1705118400000,
  },
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
  },
]

export default IndexList
