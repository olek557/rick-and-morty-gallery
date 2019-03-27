import {Main} from '../Components/Main';
import {Test} from '../Components/Test';
import {NotFound} from '../Components/NotFound';
import {Users} from '../Components/Users';
import {User} from '../Components/User';

export const routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'test',
        component: Test
    },
    {
        path: '**',
        component: NotFound
    },
    {
        path: 'users',
        component: Users
    },
    {
        path: 'user/:id',
        component: User
    }
]
