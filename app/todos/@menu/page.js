import Link from "next/link";

const getData = async () => {
  //
  const res = await fetch(
    "https://todo-test-26825-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
  );
  const data = await res.json();
  return data;
};

const todosMenu = async (req) => {
  //
  const menuObj = await getData();

  console.log(req);

  return (
    <fieldset className="todos_menu">
      <legend>menu</legend>
      {/*  */}
      {Object.keys(menuObj).map((key) => {
        return (
          <Link href={`/todos/${key}`} key={key} className="todos_menu-item">
            <p>{menuObj[key].title}</p>
          </Link>
        );
      })}
    </fieldset>
  );
};

export default todosMenu;
