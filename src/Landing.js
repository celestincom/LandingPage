import './Landing.css';
// import Carousel from './components/carousel/carousel';
// import logo from './logo.svg';
import Download from './components/download-component/download';
import PictureWriting from './components/picture-writing/picturewriting';
import TextModal from './components/text-modal/textmodal';
import MainFeatures from './components/main-features/mainfeatures';
import Quote from './components/quote/quote';
import Footer from './components/footer/footer';
import BurgerMenu from './components/burgermenu/burgermenu';
import CollapseableItems from './components/collapseableitems/collapseableitems';
import Query from './components/query/query';

function Landing() {
  return (
    <div className="landing">
      {/* <Carousel /> */}
      <BurgerMenu />
      <Download />
      <PictureWriting />
      <TextModal />
      <MainFeatures />
      <Quote />
      <CollapseableItems />
      <Query />
      <Footer />
    </div>
  );
}

export default Landing;
