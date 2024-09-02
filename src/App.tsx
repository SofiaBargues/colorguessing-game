import "./App.css";

function App() {
  const color = "bg-orange-500";
  let name = "";
  function Button({ name }: { name: string }) {
    return <button className="bg-slate-300 m-auto">{name}</button>;
  }

  return (
    <div className="flex flex-col gap-5 ">
      <div className={"h-[100px] w-[100px] m-auto " + color}></div>
      <div className="flex ">
        <Button name="color" />
        <Button name="color" />
        <Button name="color" />
      </div>
    </div>
  );
}

export default App;
