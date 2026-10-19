
import { Link } from "react-router-dom"

export function NotFound() {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="heading-1">404 — PAGE NOT FOUND</h1>

            <p className="paragraph-1 text-muted">
                Sorry, the page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="font-outfit font-bold underline underline-offset-4"
            >
                BACK TO HOME
            </Link>
        </section>
    )
}
