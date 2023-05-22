import "../css/App.css";
import Header from "./Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function addData(){
    setData([...data,{name,email}])
    setName("");
    setEmail("");
  }

  function remove(index){
    let arr = data;
    arr.splice(index,1)
    setData([...arr]);

  }
  return (
    <div className="App">
      <Header />
      <div className="textFields">
        <Stack spacing={4} direction="row">
          <TextField
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="standard-basic"
            label="Name"
            variant="standard"
            color="secondary"
          />
          <TextField
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="standard-basic"
            label="Email"
            variant="standard"
            color="secondary"
          />


          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            // <Fields key={index}  name={element.name} email={element.email} index={index} />
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              {/* <h4>Remove</h4> */}
              <Stack spacing={4} direction="row">
                <Button
                  onClick={() => remove(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default App;
