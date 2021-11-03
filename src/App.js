import TodoApp from "./TodoApp";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <TodoApp />
      </LocalizationProvider>
    </div>
  );
}

export default App;
