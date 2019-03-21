import 'normalize.css';
import '../scss/general.scss';

const api = "https://rickandmortyapi.com/api/character/";
const wrapper = document.getElementById('wrapper');
const fetchCharacters = fetch(api)
  .then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error(resp.status)
  })
  .then(({results}) => {
    return results;
  });


const makeCharacter = (person) => {
  
  // console.log(person)
  const element = document.createElement('div');
  element.innerHTML = `
    <div class="character">
      <div class="character__image" scr="${person.image}"></div>
      <div class="character__name">${person.name}</div>
      <span class="character__status">${person.status}</span>
    </div>
  `
  return element
}

const makeCharacterList = (persons) => {
  
  const list = document.createElement('div');
  list.classList.add('character-list')
  
  const domElemets = persons.map(person => {
    return makeCharacter(person)
  });
  list.append(...domElemets);
  console.log(list);
  return list
}


const drawCharacter = (characters) => {
  const htmlCharacters = makeCharacterList(characters);
  const wrapper = document.getElementById('wrapper');
  wrapper.append(htmlCharacters);
};

const init = () => {
  fetchCharacters.then(characters => {
    drawCharacter(characters);
  });

}

init();