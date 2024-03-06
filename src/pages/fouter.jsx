const Fouter = (props) => {
  const { joy, setJoy } = props;
  const { cat, setCat } = props;

  const Value = () => {
    setCat("dog");
    setJoy("roy");
  };
  return (
    <div>
      
      
      <button onClick={Value}> tak a shot </button>
    </div>
  );
};
export default Fouter;
