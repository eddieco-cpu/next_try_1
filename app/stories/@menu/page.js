import Link from "next/link";

console.log("@@@ stories_menu @@@");

const getData = async () => {
  const res = await fetch(
    "https://nextjs-test-01-ce424-default-rtdb.firebaseio.com/stories.json"
  );
  const data = await res.json();
  return data;
};

const StoriesMenu = async () => {
  //
  const menuObj = await getData();
  // console.log("@@@ menuObj @@@ \n", menuObj);

  return (
    <fieldset className="stories_menu">
      <legend>menu</legend>
      {/*  */}
      {Object.keys(menuObj).map((key) => {
        return (
          <Link
            href={`/stories/${key}`}
            key={key}
            className="stories_menu-item"
          >
            <p>{menuObj[key].title}</p>
          </Link>
        );
      })}
    </fieldset>
  );
};

export default StoriesMenu;
