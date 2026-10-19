import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "./AppLayout"
import { HomePage } from "./pages/Home/HomePage"
import { GalleryPage } from "./pages/Gallery/GalleryPage"
import { AboutPage } from "./pages/About/AboutPage"
import { NotFound } from "./pages/NotFound"

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/gallery",
                element: <GalleryPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <NotFound/>,
            }
        ],
    },
])