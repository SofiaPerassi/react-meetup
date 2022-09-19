import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeMeetupFavorite } from "../actions";
import Card from "../components/ui/Card";
import classes from "../components/meetups/MeetupItem.module.css";

export default function FavoritesPage() {

  const dispatch = useDispatch();

  const meetups = useSelector((state) => state.meetupsFavorites)

  return (
    <section>
      <li className={classes.item} data-test='meet-up-item'>
        { meetups && meetups.map(meetup => (
          <Card key={meetup.id}>
          <div className={classes.image}>
            <img src={meetup.image} alt={meetup.title} />
          </div>
          <div className={classes.content}>
            <h3>{meetup.title}</h3>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={() => removeMeetupFavorite(meetup.id)}>Add to favorites</button>
          </div>
        </Card>
        ))}
      </li>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    meetups: state.meetupsFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMeetupFavorite: id => dispatch(removeMeetupFavorite(id))
  };
}