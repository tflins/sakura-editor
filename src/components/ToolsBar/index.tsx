import { Button } from 'antd'
import style from './index.module.scss'

export const defaultTools = ["撤销", "前进", "插入图片", "插入文字"];

export default function ToolsBar() {
  return (
    <div className={style.toolsbar}>
      <ul className={style.list}>
        {defaultTools.map((item, index) => (
          <li className={style.listItem} key={index}>
            <Button>{item}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
