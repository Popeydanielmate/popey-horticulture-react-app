import { Route, Routes } from "react-router-dom";
import Header from "./components/header"; 
import Homepage from "./pages/homepage"; 
import Template from "./pages/_templatepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
