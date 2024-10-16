import { ComponentProps } from "react"

export const Input = (props: ComponentProps<"input">) => {
  return (
    <input
        {...props}
        className="w-full border-4 border-emerald-800 border-solid rounded-md p-2"
    />
  )
}
