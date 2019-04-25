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
            const user = userResp;
            console.log(userResp)
            this.updateState({user: user});
            this.render();
            // return user;
        });
    }
    render() {
        if (!this.state) {
            return {
                tag: 'div',
                classList: 'card',
                children: [
                    {
                        tag: 'div',
                        classList: 'card__info',
                        children: [
                            {
                                tag: 'p',
                                content: 'loading'
                            }
                        ]
                    }
                ]
            }
        } else {
            return [
                `
                    <div class="card">
                        <div class="card__img">
                            <img src="${this.state.user.image}" alt="">
                        </div>
                        <div class="card__info">
                            <div class="card__info-row row">
                                <div class="cell cell--title">Name</div>
                                <div class="cell">${this.state.user.name}</div>
                            </div>
                        </div>
                    </div>
                `
            ]
        }
    }
}