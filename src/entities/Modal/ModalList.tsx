import { Account } from "./ui/account"
import { Customization } from "./ui/customization"
import { General } from "./ui/general"
import { Notifications } from "./ui/notifications"
import { Security } from "./ui/security"

interface ModalList {
    id: string;
    title: string;
    image: string;
    content: React.ReactNode;
}

export const ModalList: ModalList[] = [
    {
        id: '1',
        image: '/general_white.svg',
        title: 'General',
        content: <General />,
    },
    {
        id: '2',
        image: '/ntf_white.svg',
        title: 'Notifications',
        content: <Notifications />
    },
    {
        id: '3',
        image: '/cstm_white.svg',
        title: 'Customization',
        content: <Customization />
    },
    {
        id: '4',
        image: '/scrty_white.svg',
        title: 'Security',
        content: <Security />
    }, 
    {
        id: '5',
        image: '/acc_white.svg',
        title: 'Account',
        content: <Account />
    }
]