import Component from "../../framework/Component";
import {getData} from "../../api/api";

export default class User extends Component {

    constructor(host, props) {
        
        super(host, props);
        this.getProperData();

    }
    getProperData() {
        let usetId = this.props.id;
        console.log(usetId);
        getData(usetId).then((userResp) => {
            const user = userResp.name;
            // console.log(user.name)
            this.updateState({userName: user});
            this.render();
            // return user;
        });
    }
    render() {
        if (!this.state) {
            return 'Loading....' 
        } else {
            return [
                {
                    tag: 'p',
                    content: `this is children is ${this.state.userName}`
                }
            ]
        }
    }
}