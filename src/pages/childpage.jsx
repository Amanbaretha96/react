const Childpage = (props) => {
  const { meet, setMeet } = props;
  const { sonu, setSonu } = props;

  const Root = () => {
    setMeet("high");
    setSonu("low");
  };
  return (
    <div>
      <button on onClick={Root}>click me</button>
    </div>
  );
};
export default Childpage;
