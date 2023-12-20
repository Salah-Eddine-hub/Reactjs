import React from "react";


function App(props) {
  const [time, setTime] = React.useState(props.time);

  function updateTime(){
    setTime(new Date().toLocaleTimeString());
  }
  
  setInterval(setTime(new Date().toLocaleTimeString()), 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>

    </div>
  );
}

export default App;
