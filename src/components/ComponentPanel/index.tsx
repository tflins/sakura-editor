import { componentList } from '../../core/base-components'

import style from './index.module.scss'

export default function ComponentPanel() {
  const hadnleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const index = (e.target as HTMLDivElement).getAttribute('data-index')!
    e.dataTransfer.setData('index', index)
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
  }

  return (
    <div
      className={style.componentPanel}
      onDragStart={hadnleDragStart}
      onDragEnd={handleDragEnd}
    >
      <ul className={style.list}>
        {componentList.map((c, i) => (
          <li className={style.item} key={i} draggable data-index={i}>
            <div className={style.label}>{c.label}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
