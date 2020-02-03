export default function(state, action) {
  // compute and return the new state
  if (state === undefined) {
    return []
  }

  // TODO Handle Actions
  if (action.type === 'SET_CITIES') {
    return action.payload;
  } else {
    return state;
  }

  // switch(action.type) {
  //   case 'SET_CITIES':
  //     return action.payload;
  //   default:
  //     return state;
  // }
}
