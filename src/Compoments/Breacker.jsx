import '../Styles/Breackerstyles.css';
function Breacker({ text }) {
  return (
    <div className="Breacker">
        <h2 className="BreackerTitle">{text}</h2>
        <hr className="BreackerLine" />
    </div>
  );
}

export default Breacker;