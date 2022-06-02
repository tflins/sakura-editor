import cssStyle from './SakuraEditor.module.scss'
import { Button as SakuraButton } from './base-components'
import clsx from 'clsx'

export interface ISakuraEditorProps {
  width?: number | 'auto'
  height?: number | 'auto'
  mode?: 'preview' | 'edit'
  template?: ITemplate
}

export interface ITemplate {
  id: string
  components: []
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

  const style = {
    width: typeof width === 'number' ? `${width}px` : '100%',
    height: typeof height === 'number' ? `${height}px` : '100%',
  }

  return (
    <div className={cssStyle.sakuraEditor} style={style}>
      <div className='editor-shell'>
        <SakuraButton left={200} top={200} width={100} height={100} />
      </div>
    </div>
  )
}
