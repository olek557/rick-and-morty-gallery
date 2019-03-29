export const getData = (url = '') => {
    const baseUrl = 'https://rickandmortyapi.com/api/character/';
    return fetch(baseUrl + url).then(resp =>{
        if(resp.ok) {
            return resp.json();
        }
    })
};