export default function QuoteWrapper(props) {
  return (
    <div className="quote" id="quote">
      {props.children}
    </div>
  );
}
