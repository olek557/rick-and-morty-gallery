import 'normalize.css';
import '../scss/general.scss';

const api = "https://rickandmortyapi.com/api/character/";

const fetchCharacter = fetch(api)
  .then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error(resp.status)
  });


const makeCharacter = () => {
  
}

const makeCharacterList = (person) => {
  const personListHtmlElement = document.createElement('ul');
  personListHtmlElement.append()
}



const init = () => {
  fetchCharacter.then(characters => {
    makeCharacterList(characters);
  });
}

init();