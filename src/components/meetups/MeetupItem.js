import { useFetch } from "./../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { addMeetupFavorite } from '../../actions/index';
import { useDispatch } from "react-redux";

export default function MeetupItem() {
  const { data } = useFetch({
    url: "/data.json",
  });

  const dispatch = useDispatch()

  function handleFavorite(meetup) {
    dispatch(addMeetupFavorite(meetup))
  }

  if (!data) return <p>Loading...</p>;

  return (
    <li className={classes.item} data-test='meet-up-item'>

      { data && data.map(meetup => (
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
          <button onClick={() => handleFavorite(meetup)}>Add to favorites</button>
        </div>
      </Card>
      ))}
    </li>
  );
}
