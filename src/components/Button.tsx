import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type ButtonProps =
    | {
        children: ReactNode
        to: string
        href?: never
        className?: string
    }
    | {
        children: ReactNode
        href: string
        to?: never
        className?: string
    }

export function Button(props: ButtonProps) {
    const {
        children,
        className = "",
    } = props

    const styles = `
        heading-4
        inline-block
        rounded-[5px]
        bg-primary
        px-[12px]
        py-[6px]
        min-[1280px]:px-[14px]
        min-[1280px]:py-[8px]
        ${className}
    `

    if (props.to !== undefined) {
        return (
            <Link
                to={props.to}
                className={styles}
            >
                {children}
            </Link>
        )
    }

    return (
        <a
            href={props.href}
            className={styles}
        >
            {children}
        </a>
    )
}