import { createApp } from 'vue'
import '@/common/styles/frame.styl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Login from '@/popup/views/login/login.vue'

const app = createApp(Login)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
