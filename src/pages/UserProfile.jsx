import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // grabs :id from the URL

  return <h1>Profile of user: {id}</h1>;
}