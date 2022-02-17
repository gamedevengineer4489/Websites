import  iceImage  from '../images/ice_image.jpg';
import  fridgeImage  from '../images/fridge.jpg';

const initialState = [
    {Name: "AW Ice Maker", Description: "This device will make it unncecessary to buy ice at the end of every day.", Image: iceImage, Cost: 2000},
    {Name: "AW Refrigerator", Description: "This device will make it unnecessary to buy lemons every day.", Image: fridgeImage, Cost: 1800}
];

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}