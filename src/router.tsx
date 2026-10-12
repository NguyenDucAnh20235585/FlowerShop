import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "./AppLayout"
import { HomePage } from "./Pages/Home/HomePage"
import { GalleryPage } from "./Pages/Gallery/GalleryPage"
import { AboutPage } from "./Pages/About/AboutPage"

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
        ],
    },
])