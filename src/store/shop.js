
const initialState = [

]

const Shop = (state=initialState, action) =>{
    switch (action.type) {
        case 'ADD':
            let item = action.payload
            state.push(item)
            return state
        default:
            return state
            break;
    }
}

export default Shop