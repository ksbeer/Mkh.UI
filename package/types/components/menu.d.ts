/** 菜单类型 */
declare enum MenuType {
  /** 节点菜单 */
  Node,
  /** 路由菜单 */
  Route,
  /** 链接菜单 */
  Link,
  /** 自定义脚本菜单 */
  CustomJs,
}

/** 多语言 */
interface Locales {
  /** 英文 */
  en: string
  /** 中文 */
  'zh-cn': string
  [key: string]: string
}

/** 菜单面包屑 */
interface Breadcrumb {
  /** 跳转路由 */
  to?: string
  /** 路由Query参数 */
  routeQuery?: { [key: string]: any }
  /** 路由Params参数 */
  routeParams?: { [key: string]: any }
  /** 多语言 */
  locales: Locales
}

/** 按钮信息 */
interface Button {}

/** 菜单信息 */
export type Menu = {
  /** 菜单编号 */
  id: string | number
} & Partial<{
  /** 菜单类型 */
  type: MenuType
  /** 菜单图标 */
  icon: string
  /** 菜单层级 */
  level: number
  /** 所属模块 */
  module: string
  /** 是否显示 */
  show: boolean
  /** 多语言 */
  locales: Locales
  /** 路由名称 */
  routeName: string
  /** 路由Query参数 */
  routeQuery: string
  /** 路由Params参数 */
  routeParams: string
  /** 按钮 */
  buttons: Array<Button>
  /** 面包屑 */
  breadcrumb: Breadcrumb[]
  /** 子级菜单 */
  children: Menu[]
}>
