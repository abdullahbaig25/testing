import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./component/index";
import NotFound from "./component/notfound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Demo />} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
