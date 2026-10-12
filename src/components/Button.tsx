import { Link } from "react-router-dom"

type ButtonProps = {
    children: React.ReactNode
    to: string
    className?: string
}

export function Button({
    children,
    to,
    className = "",
}: ButtonProps) {
    return (
        <Link
            to={to}
            className={`inline-block rounded-[5px] bg-[#ffc400] px-[12px] py-[6px] font-bold ${className}`}
        >
            {children}
        </Link>
    )
}