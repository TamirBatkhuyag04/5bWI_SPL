import Card from "./components/Card.tsx";
import Header from "./components/Header.tsx";

export function App() {
  return (
    <>
      <div className="bg-black w-full h-full">
        <Header />
        <div className=" grid grid-cols-2 md:grid-cols-4">
          <Card name="Tamir Batkhuyag" image="https://picsum.photos/id/201/200/300" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus" />
          <Card name="Diego Zechner" image="https://picsum.photos/id/202/200/300" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus" />
          <Card name="Maksim Gruschin" image="https://picsum.photos/id/203/200/300" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus" />
          <Card name="Sefa Öztürk" image="https://picsum.photos/id/204/200/300" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus" />
          <Card name="Tamir Batkhuyag" image="https://picsum.photos/id/199/200/300" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus" />
          <Card name="Tamir Batkhuyag" image="https://picsum.photos/id/198/200/300" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus" />
        </div>
      </div>
    </>
  );
}

export default App;