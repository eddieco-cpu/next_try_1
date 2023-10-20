const getData = async (sid) => {
  const res = await fetch(
    `https://nextjs-test-01-ce424-default-rtdb.firebaseio.com/stories/${sid}.json`
  );
  const data = await res.json();
  return data;
};

const Stories = async ({ params: { sid } }) => {
  //
  console.log("@@@ params @@@ \n", sid);

  const menuObj = await getData(sid);
  return (
    <div className="stories_page">
      <b>Stories - {sid}</b>
      {Object.keys(menuObj).map((key) => {
        return (
          <div key={key}>
            <b>{key} : </b>
            <p>{menuObj[key]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
