export interface IButtonProps {
  value: string
}

export function Button(props: IButtonProps) {
  return (
    <button className="buttonElement">
      {props.value}
    </button>
  )
}
