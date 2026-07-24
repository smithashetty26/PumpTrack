import "../styles/loader.css";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loader;