import 'normalize.css';
import '../scss/general.scss';

import { routes } from './routes/routes'
import Router from './framework/Router';
import { App } from './Components/App';

const router = new Router(document.getElementById('wrapper'), routes, App);
router.init();
