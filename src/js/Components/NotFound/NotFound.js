import Component from "../../framework/Component";

export default class NotFound extends Component {

    constructor(host) {
        console.log('here')
        super(host);
    }

    render() {
        return [
           {
               tag: 'p',
               content: 'not found'
           }
        ]   
    }
}