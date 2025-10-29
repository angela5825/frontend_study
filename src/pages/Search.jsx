import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Search = () => {
  const location = useLocation();
  // console.log(location.search);
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");

  useEffect(() => {
    console.log("Query Parameter (keyword) : ", keyword);
  }, [location, keyword]);
  return (
    <>
      <h1>Search Keyword : {keyword}</h1>
    </>
  );
};

export default Search;
