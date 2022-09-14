import useInput from "./useInput";

const InteractiveDiv = () => {
  const [divWidth, setDivWidth] = useInput("");
  return (
    <div>
      <input type={"number"} {...setDivWidth} />
      <div
        style={{
          width: Number(divWidth) + "px",
          backgroundColor: "red",
          height: "100px",
        }}
      ></div>
    </div>
  );
};

export default InteractiveDiv;
