import DropDown from "../Dropdown/Dropdown";
import TEAMS from "../../constants/teams";

export default function GlobalHeader() {
  return (
    <div className="flex justify-around w-screen border px-36 h-10 text-white bg-black">
      this will be the global header
      <DropDown list={Object.keys(TEAMS)} title={"Teams"} />
    </div>
  );
}
