export default function Button(props) {
  console.log(props);
  return (
    <button
      className={props.color}
      onClick={() => {
        props.setColor(props.color);
        props.setShowColors(false); // Hide the colored buttons when a color is chosen
      }}
    >
    </button>
  );
}
