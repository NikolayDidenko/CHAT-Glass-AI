import { createBrowserRouter } from "react-router";
import { Chat } from "../../pages/chat";
import { UserAcc } from "../../pages/user_acc";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Chat />
    },
    {
        path: '/account',
        element: <UserAcc />
    },
])