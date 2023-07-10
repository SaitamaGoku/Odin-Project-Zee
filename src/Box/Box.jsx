export default function Box(props) {
  return (
    <div className="box-content">
      {" "}
      <div className="box" />
      <p style={{ textAlign: "center", marginTop: 2 }}>{props.subtext}</p>
    </div>
  );
}
