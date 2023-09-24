import './Landing.css';
import Carousel from './components/carousel/carousel';
import Download from './components/download-component/download';
import PictureWriting from './components/picture-writing/picturewriting';
import TextModal from './components/text-modal/textmodal';
import MainFeatures from './components/main-features/mainfeatures';
import Quote from './components/quote/quote';
import Footer from './components/footer/footer';
import BurgerMenu from './components/burgermenu/burgermenu';
import CollapseableItems from './components/collapseableitems/collapseableitems';
import Query from './components/query/query';
import Team from './components/team/team';

function Landing() {
  return (
    <div className="landing">
      <BurgerMenu />
      <Carousel />
      <Download />
      <PictureWriting />
      <TextModal />
      <MainFeatures />
      <div style={{width: '100%', display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className='background-container'>
          <img src='./images/scooters/Scooters2.svg' style={{ visibility: "hidden" }} />
        </div>
      </div>
      <div className='under-background-container'><TextModal /></div>
      <Team />
      <Quote />
      <CollapseableItems />
      <Query />
      <Footer />
    </div>
  );
}

export default Landing;
