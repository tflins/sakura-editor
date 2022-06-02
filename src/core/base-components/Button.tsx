export type ButtonProps = {
  value?: string
} & IBaseComponentProps

export interface IBaseComponentProps {
  width: number
  height: number
  left: number
  top: number
}

export function Button(props: ButtonProps) {
  const { value = '按钮组件', width = 72, height = 22, left = 0, top = 0 } = props
  const style = {
    height: `${height}px`,
    width: `${width}px`,
    left: `${left}px`,
    top: `${top}px`,
    position: 'absolute',
    cursor: 'pointer',
  } as React.CSSProperties

  return (
    <button className="buttonElement" style={style}>
      {value}
    </button>
  )
}
