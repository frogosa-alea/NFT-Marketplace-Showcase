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
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
        mockUpImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockUpImg={assets.mockup}
        banner="banner02"
      />
      <Download/>
    </>
  );
}

export default App;
