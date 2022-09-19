export function addMeetupFavorite(payload) { // payload --> obj que representa un meetup
    return { type: "ADD_MEETUP_FAVORITE", payload };
  }
  
  export function removeMeetupFavorite(id) { // payload --> id representa un meetup
    return { type: "REMOVE_MEETUP_FAVORITE", payload: id };
  }
