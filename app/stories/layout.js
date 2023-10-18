import Main from "./_main";

export default function Layout({ children, menu }) {
  return (
    <fieldset className="stories">
      <legend>stories</legend>
      {menu}
      <Main>{children}</Main>
    </fieldset>
  );
}
