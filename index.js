const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAMS = 'BUY_ICECREAMS'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCreams(){
    return {
    
        type: BUY_ICECREAMS
    }
}

// (previosState, action) => newState

const initialState = {
    noOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes -1
        }
        case BUY_ICECREAMS: return {
            ...state,
            noOfIceCreams: state.numOfIceCreams -1
        }
        default: return state   
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())
unsubscribe()
