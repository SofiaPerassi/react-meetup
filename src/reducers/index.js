const initialState = {
    meetupsFavorites: [],
  };

  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MEETUP_FAVORITE") {
      if (!state.meetupsFavorites.find(meetup => meetup.id === action.payload.id)) {
        return {
          ...state,
          meetupsFavorites: state.meetupsFavorites.concat(action.payload)
        }
      }
    }
    if (action.type === "REMOVE_MEETUP_FAVORITE") {
        return {
          ...state,
          meetupsFavorites: state.meetupsFavorites.filter(meetup => meetup.id !== action.payload)
        };
    }
    return state;
  }
  
  export default rootReducer;