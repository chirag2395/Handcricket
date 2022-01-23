import { useState, useEffect } from "react";
import Buttons from "./Button";
import Inputs from "./Input";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  const [target, setTarget] = useState(0);
  const [score, setScore] = useState(0);
  const [inp, setInp] = useState();
  const [msg, setMsg] = useState("");
  const [res, setRes] = useState("");
  const [req, setReq] = useState("");

  useEffect(() => {
    handleReady();
  }, []);
  const handleReady = () => {
    setTarget(Math.floor(Math.random() * 50 + 1));
    setScore(0);
    setReq("");
    setRes("");
  };
  const checkScore = (val, num) => {
    if (val > target) {
      setMsg("you win");
      setRes("vicotry");
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
    const num = Math.floor(Math.random() * 6 + 1);
    const val = Number(score) + Number(inp);
    if (inp != num) setScore(val);

    checkScore(val, num);
    setInp();
  };

  const handleChange = (e) => {
    setInp(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
              value={inp}
            />
            <br></br>
            <Buttons type="submit" onClick={handleSubmit} name="RUN" />
            <br></br>
            <Buttons onClick={handleReady} name="SET TARGET" />

            <p> Your target is {target}</p>
            <p> your score is {score}</p>
            <p> Required runs {req}</p>

            {res && <p>{msg}</p>}
            {/* conditional rendering */}
            <p>{res}</p>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default App;
