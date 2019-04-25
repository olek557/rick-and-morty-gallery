import {Main} from '../Components/Main';
import {NotFound} from '../Components/NotFound';
import {Users} from '../Components/Users';
import {User} from '../Components/User';

export const routes = [
    {
        path: '',
        component: Users
    },
    {
        path: '**',
        component: NotFound
    },
    {
        path: 'user/:id',
        component: User
    }
]
