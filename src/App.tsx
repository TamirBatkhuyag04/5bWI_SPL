import Header from "./components/Header.tsx";
import PeopleContainer from "./components/PeopleContainer.tsx";

export function App() {
  return (
    <div className="bg-black w-full h-full">
      <Header />
      <PeopleContainer />
    </div>
  );
}

export default App;