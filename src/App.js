import { Download, SectionWrapper, Features } from "./components";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">React Native NFT SHowcase</h1>
      <Download/>
      <Features/>
      <SectionWrapper/>
    </div>
  );
}

export default App;
