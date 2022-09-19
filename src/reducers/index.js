const initialState = {
    meetupsFavorites: [],
    meetups: [],
  };

  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MEETUP_FAVORITE") {
        console.log(state.meetupsFavorites)
        return {
          ...state,
          meetupsFavorites: state.meetupsFavorites.concat(action.payload)
        }
    }
    if (action.type === "REMOVE_MEETUP_FAVORITE") {
        return {
          ...state,
          meetups: action.payload.Search
        };
    }
    return state;
  }
  
  export default rootReducer;