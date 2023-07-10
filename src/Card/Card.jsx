export default function Card() {
  return (
    <div className="card">
      <div className="left-card">
        <p className="card-heading">Call to action!</p>
        <p className="card-desc">Sign up for newsletter</p>
      </div>
      <div className="right-card">
        <button
          style={{
            width: "max-content",
            backgroundColor: "#3882f6",
            "border-radius": 5,
            border: "2px solid white",
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 10,
            paddingBottom: 10,
            color: "#f9faf8",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
