import { ReactNode } from "react"

export interface IButton {
    text: string
    type?: string
    onClick?: () => void
    icon?: ReactNode
    isTransparent?: boolean
}