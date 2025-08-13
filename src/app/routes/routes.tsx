import { createBrowserRouter } from "react-router";
import { Chat } from "../../pages/chat";
import { UserAcc } from "../../pages/user_acc";
import { SignIn } from "../../pages/signIn";
import { SignUp } from "../../pages/signUp";
import { PayLanding } from "../../pages/pay_landing";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Chat />
    },
    {
        path: '/account',
        element: <UserAcc />
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/subscription-plan',
        element: <PayLanding />
    }
])