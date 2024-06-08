import wandering_sword from '../assets/wandering_sword.png'

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
    date: 1705161521479,
  },
]

export default IndexList
