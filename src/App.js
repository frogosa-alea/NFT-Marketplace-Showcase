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
    </>
  );
}

export default App;
