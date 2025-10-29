import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Current Path: ", location.pathname);
  }, [location]);
  return (
    <>
      <h2>Home</h2>
      <p>Welcome to Web Dev Class!</p>
    </>
  );
};

export default Home;
