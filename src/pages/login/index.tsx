import { Input, Button} from 'antd'
import style from './index.module.scss'

export const LoginBox = () => {
  return (
    <div className={style.loginBox}>
      <Input placeholder='用户名' />
      <Input.Password placeholder='密码' />
      <Button block type='primary'>登陆</Button>
    </div>
  )
}

export default function Login() {
  return (
    <div className={style.login}>
      <h1 className={style.title}>
        Sakura editor
      </h1>
      <div className={style.subTitle}>
        如樱花般盛开
      </div>
      <LoginBox />
    </div>
  )
}