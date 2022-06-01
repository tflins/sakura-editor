import { componentList } from '../../core/base-components'
import eventBus from '../../utils/event-bus'

import style from './index.module.scss'

export default function ComponentPanel() {
  const hadnleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    eventBus.emit('drag-start', e)
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    eventBus.emit('drag-end', e)
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
