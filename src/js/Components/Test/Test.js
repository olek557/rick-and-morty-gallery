import Component from "../../framework/Component";

export default class Test extends Component {

    constructor(host) {
        console.log('here')
        super(host);
    }

    render() {
        return [
           {
               tag: 'p',
               content: 'test'
           }
        ]   
    }
}