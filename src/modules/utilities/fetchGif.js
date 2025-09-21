const roundGifsIds = [
    'koPZEcZ0inEIg',
    '11eAnLbBcK6X8Q',
    'NNVrFKZF3s61W',
    'K0JrA2VbkFy2A',
    'HTgVh3aecqdq2UvDmP',
    '105TPTlFrqaW1G',
    'l0Iyd75A0oV4RC0pi',
    'YnQWBOGVavTFK',
    'u6xMPnzIyJB84',
    'kWtMaZKYMv5snM8LNy',
];

export default async function fetchGif(type) {
    const key = 'z6MWDuupxTJwFGjDxMQNe5HO2U8BC0Yi';
    let targetUrl = 'https://api.giphy.com/v1/gifs/';

    if (type === 'round') {
        const gifId =
            roundGifsIds[Math.floor(Math.random() * roundGifsIds.length)];
        targetUrl += `${gifId}?api_key=${key}`;
    } else if (type === 'lose') {
        const gifId = 'p4w0AMZJa2EtG';
        targetUrl += `${gifId}?api_key=${key}`;
    } else if (type === 'win') {
        const gifId = 'XR9cbNEfzDrFe';
        targetUrl += `${gifId}?api_key=${key}`;
    } else if (type === 'initial') {
        const gifId = 'v2c1tTPc30szC';
        targetUrl += `${gifId}?api_key=${key}`;
    }

    const response = await fetch(targetUrl);
    if (response.status === 200) {
        const json = await response.json();

        return json.data.images.original.url;
    }
    return 'error';
}
