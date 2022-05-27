import ToolsBar from '../ToolsBar'

import style from './index.module.scss'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>SAKURA-EDITOR</h1>
      </div>

      <ToolsBar />
    </header>
  )
}
