import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Buttons from "./Button";
import Inputs from "./Input";
import Surface from "./Surface";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  const [target, setTarget] = useState(0);
  const [score, setScore] = useState(0);
  const [inp, setInp] = useState(0);
  const [msg, setMsg] = useState("");
  const [res, setRes] = useState("");
  const [req, setReq] = useState("");
  const handleReady = () => {
    setTarget(Math.floor(Math.random() * 50 + 1));
    console.log(target);
  };
  const checkScore = (val, num) => {
    if (val > target) {
      setMsg("you win");
    } else {
      if (num === inp) {
        setMsg("out");
        setRes("you loose");
      }
    }
    const rr = Number(target - val);
    if (rr > 0) setReq(rr);
    else setReq(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inp);
    const num = Math.floor(Math.random() * 6 + 1);
    const val = Number(score + inp);
    if (inp != num) setScore(val);

    checkScore(val, num);
  };

  const handleChange = (e) => {
    setInp(Number(e.target.value));
    console.log(inp);
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h3">HAND CRICKET!</Typography>
        <Typography variant="h6">RELIVE your CHILDHOOD!</Typography>
      </div>
      <Card
        style={{
          backgroundColor: "rgb(238, 255, 252)",
          boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.4)",
        }}
      >
        <CardContent style={{ fontWeight: "bold" }}>
          <Inputs
            type="number"
            placeholder="ENTER NUMBER"
            onChange={handleChange}
          />
          <br></br>
          <Buttons onClick={handleSubmit} name="RUN" />
          <br></br>
          <Buttons onClick={handleReady} name="SET TARGET" />

          <p> Your target is {target}</p>
          <p> your score is {score}</p>
          <p> Required runs {req}</p>

          <p>{msg}</p>
          <p>{res}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
