import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeMeetupFavorite } from "../actions";
import Card from "../components/ui/Card";
import classes from "../components/meetups/MeetupItem.module.css";

export default function FavoritesPage() {

  const dispatch = useDispatch();

  const meetups = useSelector((state) => state.meetupsFavorites)

  function handleRemoveMeetup(id){
    dispatch(removeMeetupFavorite(id))
  }

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
            <button onClick={() => handleRemoveMeetup(meetup.id)}>Delete</button>
          </div>
        </Card>
        ))}
      </li>
    </section>
  );
}
