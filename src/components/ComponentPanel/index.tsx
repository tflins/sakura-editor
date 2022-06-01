import { componentList } from '../../core/base-components'

import style from './index.module.scss'

export default function ComponentPanel() {
  return (
    <div className={style.componentPanel}>
      <ul className={style.list}>
        <li className={style.item} draggable>
          {componentList.map((c, i) => (
            <div className={style.label} key={i}>
              {c.label}
            </div>
          ))}
        </li>
      </ul>
    </div>
  )
}
