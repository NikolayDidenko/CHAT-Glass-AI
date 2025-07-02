import { createBrowserRouter } from "react-router";
import { Chat } from "../../pages/chat";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Chat />
    },
])