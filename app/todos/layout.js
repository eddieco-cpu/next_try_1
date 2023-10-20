import Mainfield from "../(ui)/mainFieldset";

export default function Layout({ children, menu }) {
  return (
    <fieldset className="todos">
      <legend>todos</legend>
      {menu}
      <Mainfield {...{ className: "todos_main", legend: "main" }}>
        {children}
      </Mainfield>
    </fieldset>
  );
}
