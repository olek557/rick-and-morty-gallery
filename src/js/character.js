import 'normalize.css';
import '../scss/general.scss';

const api = "https://rickandmortyapi.com/api/character/361";
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


const makeCharacter = (character) => {
  
  // console.log(character)
  const element = document.createElement('a');
  element.setAttribute('href', './character.html')
  element.classList.add('character')
  element.innerHTML = `
    <img class="character__image" src="${character.image}">
    <div class="character__name">${character.name}</div>
  `
  return element
}

// const makeCharacterList = (characters) => {
  
//   const list = document.createElement('div');
//   list.classList.add('character-list')
  
//   const domElemets = characters.map(character => {
//     return makeCharacter(character)
//   });
//   list.append(...domElemets);
//   console.log(list);
//   return list
// }


const drawCharacter = (character) => {
  const htmlCharacters = makeCharacter(character);
  const wrapper = document.getElementById('wrapper');
  wrapper.append(htmlCharacters);
};

const init = () => {
  fetchCharacters.then(characters => {
    drawCharacter(characters);
  });

}

init();