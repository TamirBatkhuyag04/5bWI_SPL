import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PeopleContainer from "./components/PeopleContainer";
import Homework from "./components/HomeworkPage";

export function App() {
  return (
    <Router>
      <div className="bg-black w-full h-full">
        <Header />
        <Routes>
          <Route path="/" element={<PeopleContainer />} />
          <Route path="/homework" element={<Homework />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;