import Component from '../../framework/Component'

export default class App extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        return [
            this.props.routerOutlet
        ];
    }
}