const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Date.now()), 5000);
  });
};

const About = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      <p>{data}</p>
    </div>
  );
};

export default About;
