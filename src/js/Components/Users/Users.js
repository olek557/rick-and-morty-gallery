import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class Users extends Component {

    constructor(host) {
        super(host);
        this.getAllCharacters();
        this.render();
    }

    getAllCharacters() {
        getData().then(characters => {
            this.updateState({ charactersList: characters.results });
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
            return {
                tag: 'div',
                classList: 'card',
                children: [
                    {
                        tag: 'div',
                        classList: 'card__info',
                        children: [
                            ...this.state.charactersList.map(character => {
                                return `
                                    <div class="row">
                                        <a href='./user/${character.id}' class="link">${character.name}</a>
                                    <div>
                                `;
                            })
                        ],
                    }
                ],
            }
        }
    }
}