export default function Quote(props) {
  return (
    <>
      <p>
        {props.quote}
      </p>
      <quote style={{ marginLeft: "60vw" }}>- {props.by}</quote>
    </>
  );
}
