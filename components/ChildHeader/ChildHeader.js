export default function ChildHeader({ data }) {
  console.log(data.data.props.api.teams[0]);
  return (
    <div
      className={`flex w-screen border z-10 px-36 h-10 text-black bg-${data.color}`}
    >
      <img src={data.data.props.api.teams[0].logo}></img>
      <div className="px-10">
        this will be the {data.data.props.api.teams[0].nickname}'s header{" "}
      </div>
    </div>
  );
}
