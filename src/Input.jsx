const Input = () => {
  return (
    <input
      onFocus={() => console.log("Focus")}
      onBlur={() => console.log("onBlur")}
      onChange={(e) => console.log(e.target.value)}
      onKeyDown={(e) => {
        console.log(e.key, "DOWN");
        if (e.key === "Enter" && e.shiftKey) {
          console.log("Shift + Enter key DOWN ");
        }
      }}
    ></input>
  );
};

export default Input;
