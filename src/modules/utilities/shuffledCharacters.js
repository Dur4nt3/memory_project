export default function shuffledCharacters() {
    const characters = [
        'guts',
        'casca',
        'erica',
        'farnese',
        'isidro',
        'ivalera',
        'puck',
        'rickert',
        'schierke',
        'serpico',
    ];

    for (let i = characters.length - 1; i > 0; i-=1) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    return characters;
}
