import Link from "next/link";
import ChildHeader from "../components/ChildHeader/ChildHeader";
export default function TeamLayout(props) {
  return (
    <>
      <ChildHeader data={props} />
      <main className="flex flex-col items-center justify-center h-screen py-20">
        this is going to be the {props.data.props.api.teams[0].fullName}' splash
      </main>
      <Link href="/">
        <p className="text-xs cursor-pointer">&larr; back to home</p>
      </Link>
    </>
  );
}
