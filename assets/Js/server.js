
async function initDatabase() {
    const jsonFile = '/Js/database.json';
    const data = await fetch(jsonFile).then(response => response.json());
    return ;
}