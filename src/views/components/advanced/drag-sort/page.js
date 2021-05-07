export default {
  //标题
  title: '拖拽排序',
  //图标
  icon: 'chat-o',
  //路由名称，需要唯一，推荐使用模块编码+下划线开头
  name: 'doc_advanced_drag_sort',
  //路由路径
  path: '/doc/advanced/drag_sort',
  //路由组件
  component: () => import('./index.vue'),
}
