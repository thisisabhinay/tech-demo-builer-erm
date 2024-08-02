import { Button } from "../ui/button"

export interface ExampleButtonProps  {
  text: string,
  [key: string]: string
}

export function ExampleButton({text, ...buttonProps}: ExampleButtonProps) {
  return <Button {...buttonProps}>{text}</Button>
}
