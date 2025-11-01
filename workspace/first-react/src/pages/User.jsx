import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
const User = () => {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    console.log("Current Path: ", location.pathname);
    console.log("URL Parameter (id) : ", id);
  }, [id, location]);
  return (
    <>
      <h1>User ID : {id} </h1>
    </>
  );
};

export default User;
