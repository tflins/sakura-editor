import cssStyle from './SakuraEditor.module.scss'
import { Button as SakuraButton } from './base-components'

export interface ISakuraEditorProps {
  width?: number | 'auto'
  height?: number | 'auto'
  mode?: 'preview' | 'edit'
  template?: {
    id: string
    components: []
  }
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
    template
  } = props

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
