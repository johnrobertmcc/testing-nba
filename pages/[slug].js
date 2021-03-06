import TeamLayout from "../layouts/TeamLayout";
import axios from "axios";
import TEAMS from "../constants/teams";
import { api_key } from "../keys";

export default function Child(props) {
  return <TeamLayout color={props.color} data={props} />;
}

export async function getServerSideProps(context) {
  var options = {
    method: "GET",
    url: `https://api-nba-v1.p.rapidapi.com/teams/city/${context.query.slug}`,
    headers: {
      "x-rapidapi-key": api_key,
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    },
  };
  let props;
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      props = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return { props: { props } };
}
