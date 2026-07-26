// 作品数据管理文件
// 新增作品时，在此数组中添加新对象即可
// 图片通过 import 引入，Vite 会自动处理路径与 hash 命名

import img01 from '../../image/01.jpg'
import img02 from '../../image/02.jpg'
import img03 from '../../image/03.jpg'
import img04 from '../../image/04.jpg'
import img05 from '../../image/05.jpg'
import img06 from '../../image/06.jpg'
import img07 from '../../image/07.jpg'
import img08 from '../../image/08.jpg'
import img09 from '../../image/09.jpg'

export const works = [
  {
    id: 1,
    title: '护肤品主图精修',
    category: 'domestic',
    cover: img01,
    images: [img01],
    description: '为某国内护肤品牌进行产品主图精修，重点处理瓶身材质质感与光影层次，突出产品高级感。',
    tags: ['精修', '护肤品', '主图'],
    date: '2024-03',
  },
  {
    id: 2,
    title: '电子产品详情页',
    category: 'domestic',
    cover: img02,
    images: [img02],
    description: '3C数码产品详情页视觉设计，含多角度产品展示、功能卖点图、场景应用图。',
    tags: ['详情页', '3C数码', '场景图'],
    date: '2024-02',
  },
  {
    id: 3,
    title: '跨境电商美妆精修',
    category: 'crossBorder',
    cover: img03,
    images: [img03],
    description: '面向海外市场的美妆产品精修，适配亚马逊、Shopify 等平台主图规范。',
    tags: ['跨境电商', '美妆', '亚马逊'],
    date: '2024-02',
  },
  {
    id: 4,
    title: '家居用品场景图合成',
    category: 'domestic',
    cover: img04,
    images: [img04],
    description: '家居日用品主图与场景图合成，打造温馨生活氛围，提升产品代入感与购买欲。',
    tags: ['场景图', '家居', '合成'],
    date: '2024-01',
  },
  {
    id: 5,
    title: '跨境食品主图设计',
    category: 'crossBorder',
    cover: img05,
    images: [img05],
    description: '面向东南亚市场的食品主图设计，强调食材新鲜感与包装质感，符合当地审美习惯。',
    tags: ['跨境电商', '食品', '主图'],
    date: '2024-01',
  },
  {
    id: 6,
    title: '服饰配件精修',
    category: 'domestic',
    cover: img06,
    images: [img06],
    description: '服饰配件产品精修，还原金属光泽与皮革纹理，细节呈现清晰自然。',
    tags: ['精修', '服饰', '细节'],
    date: '2023-12',
  },
  {
    id: 7,
    title: '跨境3C数码详情页',
    category: 'crossBorder',
    cover: img07,
    images: [img07],
    description: '为某跨境品牌设计 3C 数码详情页，突出产品功能与使用场景，适配多语言版本。',
    tags: ['详情页', '3C数码', '跨境电商'],
    date: '2023-12',
  },
  {
    id: 8,
    title: '母婴产品主图精修',
    category: 'domestic',
    cover: img08,
    images: [img08],
    description: '母婴用品主图精修，柔和光影处理，传递安全、温和、可信赖的品牌调性。',
    tags: ['精修', '母婴', '主图'],
    date: '2023-11',
  },
  {
    id: 9,
    title: '跨境家居详情页设计',
    category: 'crossBorder',
    cover: img09,
    images: [img09],
    description: '跨境家居品牌详情页视觉设计，极简风格排版，突出产品工艺与材质细节。',
    tags: ['详情页', '家居', '跨境电商'],
    date: '2023-11',
  },
]

// 根据 id 获取单个作品
export function getWorkById(id) {
  return works.find((w) => w.id === Number(id))
}

// 获取精选作品（默认取前 count 个）
export function getFeaturedWorks(count = 6) {
  return works.slice(0, count)
}
