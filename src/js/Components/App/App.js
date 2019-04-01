import Component from '../../framework/Component'

export default class App extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        // console.log(this.props);
        return [
            {
                tag: 'div',
                content: 'App'
            },
            this.props.routerOutlet
        ];
    }
}