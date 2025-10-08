function Welcome(props) {
  console.log(props);
  return <h1>안녕하세요, {props.name}님! </h1>;
}

export default Welcome;
