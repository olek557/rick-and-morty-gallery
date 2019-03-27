export const getData = () => {
    const url = 'https://rickandmortyapi.com/api/character/2';
    return fetch(url).then(resp =>{
        if(resp.ok) {
            return resp.json();
        }
    })
};