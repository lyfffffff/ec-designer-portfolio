// 作品数据管理文件
// 作品以 Markdown 文件形式存储在 src/content/works/ 目录
// 每个文件包含 YAML frontmatter（作品字段）+ 可选正文
// 构建时通过 import.meta.glob 同步加载，js-yaml 解析 frontmatter

import { load } from 'js-yaml'

export interface Work {
  id: number
  title: string
  category: 'domestic' | 'crossBorder'
  cover: string
  images: string[]
  description: string
  tags: string[]
  date: string
}

interface RawFrontmatter {
  id: number
  title: string
  category: string
  cover: string
  images: unknown
  description: string
  tags: string[]
  date: string
}

// 以原始字符串形式同步加载所有作品 Markdown 文件
const modules = import.meta.glob('../content/works/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

// 解析 frontmatter（--- 之间的 YAML 内容）
function parseFrontmatter(raw: string): RawFrontmatter | null {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  return load(match[1]) as RawFrontmatter
}

// 兼容两种 images 格式：字符串数组 或 [{ image: '...' }] 对象数组
function normalizeImages(images: unknown): string[] {
  if (!Array.isArray(images)) return []
  return images
    .map((i) => (typeof i === 'string' ? i : (i as { image?: string })?.image ?? ''))
    .filter(Boolean)
}

// 解析全部作品并按 id 排序
export const works: Work[] = Object.values(modules)
  .map(parseFrontmatter)
  .filter((item): item is RawFrontmatter => Boolean(item))
  .map((item) => ({
    ...item,
    category: item.category as Work['category'],
    images: normalizeImages(item.images),
  }))
  .sort((a, b) => a.id - b.id)

// 根据 id 获取单个作品
export function getWorkById(id: string | number): Work | undefined {
  return works.find((w) => w.id === Number(id))
}

// 获取精选作品（默认取前 count 个）
export function getFeaturedWorks(count = 6): Work[] {
  return works.slice(0, count)
}
