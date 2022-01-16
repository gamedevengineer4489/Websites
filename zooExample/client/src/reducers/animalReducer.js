const initialState = [
    { animalName: 'Tiger', countryOrigin: 'India', bio: 'A fierce animal in the wild that due to a variety of factors is endangered.', imageURL: 'https://openclipart.org/image/800px/220653' },
    { animalName: 'Lion', countryOrigin: 'Djibouti', bio: 'A carnivore that is feared in the animal kingdom.', imageURL: 'https://openclipart.org/image/800px/323352' },
    { animalName: 'Bear', countryOrigin: 'United States and Canada', bio: 'A carnivore that eats mainly fish and has few other comparable predators.', imageURL: 'https://openclipart.org/image/800px/122557' },
    { animalName: 'Zebra', countryOrigin: 'Nambia', bio: 'Are they black with white stripes or white with black stripes?', imageURL: 'https://openclipart.org/image/800px/27608' }
]

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
