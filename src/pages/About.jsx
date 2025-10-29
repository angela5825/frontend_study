const About = () => {
  return (
    <>
      <h2>About</h2>
      <ul>
        {["HTML", "CSS", "JavaScript"].map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default About;
