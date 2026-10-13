import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

export function AppLayout() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div
            className="
                min-h-screen
                overflow-clip
                rounded-[16px]
                bg-white
            "
        >
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}