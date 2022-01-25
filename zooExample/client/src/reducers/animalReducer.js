const initialState = [
    { animalName: 'Tiger', countryOrigin: 'India, Southeast Asia, Far east Russia', bio: 'The largest species of cat in the animal kingdom. Tigers typically live for around 20-26 years. They are carnvores and their diet consists of other mammals such as deer or wild boar. For habitation, tigers require large contiguous areas of land.' , imageURL: 'https://openclipart.org/image/800px/220653' },
    { animalName: 'Lion', countryOrigin: 'Sub-Saharan Africa and India', bio: 'Lions are often called the king of beasts. Lions belong to the genus Panthera and are predominately found in Africa and India. Lions are a social species are form groups called prides. A pride consists of a few adult males, related females and cubs.', imageURL: 'https://openclipart.org/image/800px/323352' },
    { animalName: 'Bear', countryOrigin: 'North and South America, Europe and Asia.', bio: 'Bears appear in a wide variety of habitats throughout the northern and southern hemisphere.  The diets of bears vary with Polar Bears being mainly carnivorous while the giant Panda feeds themselves almost entirely on bamboo. The remaining six bear species are omnivores eating an assortment of plants and animals. Despite their heavy build, bears are capable runners, climbers and swimmers.', imageURL: 'https://openclipart.org/image/800px/122557' },
    { animalName: 'Zebra', countryOrigin: 'Eastern and Southern Africa', bio: 'Zebras belong to the genus Equus along with horses. Zebras are well known for their distinctive black and white striped coats. The pattern of these stripes are unique to each individual Zebra. Zebras are herbivores and their diet consists mainly of low quality vegetation.', imageURL: 'https://openclipart.org/image/800px/27608' }
]

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
