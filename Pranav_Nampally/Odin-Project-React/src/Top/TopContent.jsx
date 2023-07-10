export default function TopContent(props) {
  return (
    <div className="top-content">
      <div className="left-top">
        <p id="heading">This is a website</p>
        <p style={{ fontSize: 18, color: "#e5e7eb", marginTop: 2 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At soluta
          nobis sunt nam repellat cum officiis laudantium, possimus, dolores
          dicta quo, hic consequatur qui quaerat nulla. Cum cupiditate iste
          corporis?
        </p>
        <button
          style={{
            width: "max-content",
            backgroundColor: "#3882f6",
            borderRadius: 5,
            border: "2px solid #3882f6",
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
      <div className="right-top">
        <img
          width="300vw"
          src="http://source.unsplash.com/CiFaYIvZyyA/800"
          alt="flower image"
        />
      </div>
    </div>
  );
}
