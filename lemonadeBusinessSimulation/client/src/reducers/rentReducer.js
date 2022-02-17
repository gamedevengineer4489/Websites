const initialState = [
    
        {Name: "Neighborhood", Description: "The amount of customers won't be anything to write home about but it's a perfect place to start your lemonade empire since the rent is free.", Rent: 0, image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg' }
    
];

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}