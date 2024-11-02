import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Template from "./pages/_templatePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
}
export default App;