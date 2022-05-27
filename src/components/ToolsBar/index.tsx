import { useState } from 'react'
import { Button } from 'antd'

import style from './index.module.scss'

export const toolsAll = ['撤销', '前进', '插入图片', '插入文字'] as const

export default function ToolsBar<T extends typeof toolsAll[number][]>(props: {
  tools?: T
}) {
  const [currTools] = useState<T>(props.tools || toolsAll as unknown as T)

  return (
    <div className={style.toolsbar}>
      <ul className={style.list}>
        {currTools.map((item, index) => (
          <li className={style.listItem} key={index}>
            <Button>{item}</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
