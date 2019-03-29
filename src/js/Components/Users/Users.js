import Component from "../../framework/Component";
import {getData} from "../../api/api";

export default class Users extends Component {

    constructor(host) {
        super(host);
        this.getAllCharacters();
        this.render();
    }

    getAllCharacters() {
        getData().then(characters => {
            const charactersList = this.generateCharactersList(characters.results);
            this.updateState({charactersList: charactersList});
        });
    }

    generateCharactersList(characters) {
        const listHtml = document.createElement('ul');
        const charactersHtmlList = characters.map(character => {
            const characterHtml = document.createElement('li');
            const characterLink = document.createElement('a');
            characterLink.setAttribute('href', './user/' + character.id);
            characterLink.innerHTML = character.name;
            characterHtml.append(characterLink);
            return characterHtml;
        })
        console.log('charactersHtmlList', charactersHtmlList);

        listHtml.append(...charactersHtmlList);
        return listHtml;
    }

    render() {
        console.log(this.state)
        if(!this.state) {
            return {
                tag: 'p',
                content: 'loading'
            }
        } else {
            return this.state.charactersList;
        }
    }
}