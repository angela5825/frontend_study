const handleEvent = (name, which, event) => {
  console.log(name, which);

  if (event) {
    console.log(event.clientX, event.clientY);
    console.log(event.shiftKey);
  }
};

const Button = ({ name }) => {
  return (
    <button
      onMouseEnter={() => handleEvent(name, "MouseEnter")}
      onMouseLeave={() => handleEvent(name, "MouseLeave")}
      onDoubleClick={() => handleEvent(name, "DoubleClick")}
      onContextMenu={() => handleEvent(name, "onContextMenu")}
      onClick={(event) => handleEvent(name, "onClick", event)}
    >
      {name}
    </button>
  );
};

export default Button;
