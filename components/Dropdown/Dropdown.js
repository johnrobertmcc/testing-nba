import { useState } from "react";
import Link from "next/link";

const DropdownMenu = ({ list, title }) => {
  const [visible, setVisible] = useState(false);

  const openList = list.map((item) => (
    <li key={item[0]} className="cursor-pointer">
      <Link href={`/team/${item}`}>{item}</Link>
    </li>
  ));

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {title}
      <ul className={`${visible ? "flex flex-col bg-black" : "hidden"}`}>
        {openList}
      </ul>
    </div>
  );
};

export default DropdownMenu;
