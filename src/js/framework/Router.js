export default class Router {
    constructor(host, routes, App) {
        this.host = host;
        this.routes = routes;
        this.routerOutlet = document.createElement('div');
        this.notFound = this.routes.find(route => {
            return route.path === '**'
        });
        this.app = new App(host,
            {
                routerOutlet: this.routerOutlet
            });
        window.addEventListener('hashchange', this.handleUrlChange.bind(this));
    }
    handleUrlChange() {
        if (!location.hash) {
            location.assign(`/#${location.pathname}`)
        } else {
            const browserUrlArr = location.hash.split('/').slice(1);
            this.findRoute(browserUrlArr);
        }
    }
    findRoute(browserUrlArr) {
        const foundedRoute = this.routes.find(route => {
            return this.isUrlEqualRoute(browserUrlArr, route);
        });
        if (!foundedRoute) {
            this.renderNewComponent(this.notFound);
        } else {
            const params = this.getParamsFromUrl(foundedRoute.path, browserUrlArr);
            this.renderNewComponent(foundedRoute, params);
        }
    }
    getParamsFromUrl(routePath, browserUrlArr) {
        const routePathArr = routePath.split('/');
        const isEmptyPath = browserUrlArr.length === 1;
        if (isEmptyPath) {
            return;
        }
        return routePathArr.reduce((acc, partPath, i) => {
            if(partPath != browserUrlArr[i]) {
                acc[partPath.slice(1)] = browserUrlArr[i];
            }
            return acc
        }, {})
    }
    isUrlEqualRoute(browserUrlArr, route) {
        const routePathArr = route.path.split('/');
        return browserUrlArr.every((urlPart, i) => {
            const isRoutePathEqualBrowserUrl = urlPart === routePathArr[i];
            const isRouteHasParam = routePathArr[i].startsWith(':')
            return isRoutePathEqualBrowserUrl || isRouteHasParam;
        });
    }
    renderNewComponent(route, params) {
        const newComponent = new route.component(this.routerOutlet, params);
    }
    init() {
        this.handleUrlChange();
    }
}