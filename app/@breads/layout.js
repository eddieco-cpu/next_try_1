import Mainfield from "../(ui)/mainFieldset";

export default function Layout({ children }) {
  return (
    <Mainfield {...{ className: "breads_main", legend: "breads" }}>
      {children}
    </Mainfield>
  );
}
