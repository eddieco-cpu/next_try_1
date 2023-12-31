import Mainfield from "../(ui)/mainFieldset";

export default function Layout({ children, menu }) {
  return (
    <fieldset className="stories">
      <legend>stories</legend>
      {menu}
      <Mainfield {...{ className: "stories_main", legend: "main" }}>
        {children}
      </Mainfield>
    </fieldset>
  );
}
