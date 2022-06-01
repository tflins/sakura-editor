import cssStyle from './SakuraEditor.module.scss'
import eventBus from '../utils/event-bus'

export interface ISakuraEditorProps {
  width?: number | 'auto'
  height?: number | 'auto'
  mode?: 'preview' | 'edit'
}

export const defaultSakuraEditorProps = {
  width: 'auto',
  height: 'auto',
  mode: 'preview',
} as Partial<ISakuraEditorProps>

export default function SakuraEditor(props: ISakuraEditorProps) {
  const {
    width = defaultSakuraEditorProps.width,
    height = defaultSakuraEditorProps.height,
    mode = defaultSakuraEditorProps.mode,
  } = props

  eventBus.on('drag-start', (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e)
  })

  eventBus.on('drag-end', (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e)
  })

  const style = {
    width: typeof width === 'number' ? `${width}px` : '100%',
    height: typeof height === 'number' ? `${height}px` : '100%',
  }

  console.log(width, height, mode)

  return (
    <div className={cssStyle.sakuraEditor} style={style}>
      <div className='editor-shell'></div>
    </div>
  )
}
