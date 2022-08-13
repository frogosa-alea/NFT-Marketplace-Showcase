import { Download, SectionWrapper, Features } from "./components";
import assets from "./assets";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling and Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of Pronef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockUpImg={assets.homeCards}
        reverse
      />
      <Features/>
    </>
  );
}

export default App;
