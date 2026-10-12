import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

export function AppLayout() {
    return (
        <div
            className="
                min-h-screen
                overflow-clip
                rounded-[16px]
                bg-white

                min-[800px]:rounded-[16px]
                min-[1280px]:rounded-[16px]
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