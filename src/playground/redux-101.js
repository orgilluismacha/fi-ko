import {createStore} from 'redux';

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
});

//Reducers
//1. Reducers are pure functions.
//Pure function: output is only determined by the input. Only interacts with variables within its scope.
//2. Never change state or action

const countReducer = (state = { count: 0}, action)=> {
  switch(action.type){
    case 'INCREMENT':
      return{
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return{
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return{
        count: 0
      }
    case 'SET':
      return{
        count: action.count
      }
    default:
      return state;
  }  
}

const store = createStore(countReducer);

const unsub = store.subscribe(() => {
  console.log(store.getState());

});

// //Increment
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

//Decrement
store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(decrementCount({decrementBy: 1}));
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());
store.dispatch(setCount({count: 5}));