import login from './login'

export default {
  home: 'หน้าหลัก', //'首页',
  ok: 'ยืนยัน', //'确认',
  cancel: 'ยกเลิก', //'取消',
  add: 'เพิ่ม', //'添加',
  edit: 'แก้ไข', //'编辑',
  delete: 'ลบ', //'删除',
  save: 'บันทึก', //'保存',
  search: 'ค้นหา', //'查询',
  reset: 'รีเซ็ต', //'重置',
  operate: 'การจัดการ', //'操作',
  export: 'ส่งออก', //'导出',
  name: 'ชื่อ', //'名称',
  copy: 'คัดลอก', //'复制',
  property: 'ลักษณะ', //'属性',
  show: 'แสดง', // '显示',
  is_show: 'ต้องการเเสดงผลหรือไม่', //'是否显示',
  sort: 'ตัวกรอง', //'排序',
  sortable: 'จัดเรียงได้', //'可排序',
  align: 'จัดเรียง', //'对齐',
  yes: 'ใช่', //'是',
  no: 'ไม่', //'否',
  back: 'ย้อนกลับ', //'返回',
  profile: 'บัญชี', //'我的账户',
  logout: 'ออกจากระบบ', //'退出登录',
  code: 'รหัส', //'编码',
  remarks: 'หมายเหตุ', //'备注',
  level: 'ระดับ', //'级别',
  value: 'ค่า', //'值',
  type: 'ชนิด', //'类型',
  title: 'หัวข้อ', //'标题',
  success: 'สำเร็จ', //'成功',
  error: 'ขัดข้อง', //'错误',
  warning: 'แจ้งเตือน', //'警告',
  info: 'ข้อมูล', //'信息',
  fail: 'ไม่สำเร็จ', //'失败',
  http_error: 'เกิดข้อผิดพลาด โปรดติดต่อเจ้าหน้าที่', //'接口异常，请联系管理员',
  http_error_title: 'เกิดข้อผิดพลาด', //'接口错误',
  delete_confirm_msg: 'คุณแน่ใจหรือไม่ว่าจะลบข้อมูลนี้', //'您确认要删除当前数据吗？',
  delete_confirm_title: 'ลบแจ้งเตือน', //'删除警告',
  delete_loading: 'กำลังลบข้อมูล โปรดรอสักครู่...', //'正在删除数据，请稍后...',
  delete_success: 'ลบข้อมูลสำเร็จ', //'删除成功~',
  loading_text: 'กำลังโหลดข้อมูล โปรดรอสักครู่...', //'正在加载数据，请稍后...',
  loading_text_save: 'กำลังบันทึกข้อมูล โปรดรอสักครู่...', //'正在保存数据，请稍后...',
  save_success_msg: 'บันทึกสำเร็จ', //'保存成功',
  icon: 'สัญลักษณ์', //'图标',
  icon_picker_placeholder: 'กรุณาเลือกสัญลักษณ์', //'请选择图标',
  serial_number: 'หมายเลขซีเรียล', //'序号',
  set_column: 'ตั้งคอลัมน์', //'设置列',
  select_delete_data: 'กรุณาเลือกข้อมูลที่ต้องการลบ', //'请选择要删除的数据',
  fixed_mode: 'รูปแบบคงที่', //'固定模式',
  table_header_align: 'จัดตำแหน่งส่วนหัว', //'表头对齐',
  drag_sort: 'การจัดวาง', //'拖拽排序',
  please_select: 'กรุณาเลือก...', //'请选择...',
  skin_switch: 'เปลี่ยนรูปแบบสกิน', //'皮肤切换',
  font_size: 'ขนาดตัวหนังสือ', //'字号',
  large: 'ขนาดใหญ่', //'大号',
  small: 'ขนาดเล็ก', //'小号',
  default: 'ค่าเริ่มต้น', //'默认',
  theme: 'ธีม', //'主题',
  skin_switch_success: 'เปลี่ี่ยนสกินสำเร็จ', //'皮肤切换成功',
  id: 'เลขที่ID', //'编号',
  role: 'บทบาท', //'角色',
  phone: 'หมายเลขโทรศัพท์', //'手机号',
  email: 'อีเมล์', //'邮箱',
  status: 'สถานะ', //'状态',
  click_refresh: 'รีเฟรช', //'点击刷新',
  creator: 'ผู้สร้าง', //'创建人',
  created_time: 'เวลาสร้าง', //'创建时间',
  modifier: 'ผู้แก้ไข', //'修改人',
  modified_time: 'เวลาแก้ไข', //'修改时间',
  no_permission_access_page: 'คุณไม่มีสิทธิ์ในการเข้าถึง', //'您无权访问本页面',
  back_home: 'ย้อนกลับหน้าหลัก', //'返回首页',
  page_not_found: 'ไม่สามารถค้นหาหน้าที่ต้องการได้', //'页面找不到了',
  logout_confirm: 'คุณแน่ใจหรือไม่ว่าจะออกจากระบบ', //'您确定要退出系统吗?',
  to: 'ไปยัง', //'至',
  start_date: 'วันที่เริ่มต้น', // '开始日期',
  end_date: 'วันที่สิ้นสุด', //'结束日期',
  date_cannot_access_month: 'วันที่ต้องไม่ข้ามเดือน', //'日期不能跨月',
  exporting_data: 'กำลังส่งออกข้อมูล โปรดรอสักครู่...', //'正在导出数据，请稍后...',
  export_success: 'ส่งออกข้อมูลสำเร็จ', //'导出成功',
  export_file_name: 'ชื่อไฟล์ส่งออก', //'导出文件名',
  export_mode: 'โหมดการส่งออก', //'导出模式',
  export_mode_0: 'ข้อมูลทั้งหมด', //'当前条件下所有数据',
  export_mode_1: 'ข้อมูลหน้าปัจจุบัน', // '当前页面数据',
  copyright: 'ลิขสิทธิ์', //'版权',
  set_field: 'ตั้งค่าแถว', //'设置字段',
  align_mode: 'จัดตำแหน่ง', // '对齐方式',
  align_left: 'ซ้าย', //'居左',
  align_center: 'ตรงกลาง', //'居中',
  align_right: 'ขวา', //'居右',
  no_fixed: 'ไม่คงที่', //'不固定',
  left_side: 'ด้านซ้าย', //'左侧',
  right_side: 'ด้านขวา', //'右侧',
  formatting: 'รูปแบบ', //'格式化',
  only_supported_date: 'รองรับเฉพาะวันที่เท่านั้น', //'当前仅支持日期类型',
  select_export_filed: 'กรุณาเลือกแถวที่ต้องการนำออก', //'请选择要导出的字段',
  please_input_file_name: 'กรุณาใส่ชื่อไฟล์', //'请输入文件名称',
  please_input_title: 'กรุณาใส่ชื่อเรื่อง', //'请输入标题',
  more: 'เพิ่มเติม', //'更多',
  more_info: 'ข้อมูลเพิ่มเติม', //'更多信息',
  displayed_expand: 'ขยายภาพใหญ่', //'显示在展开区域',
  login,
}