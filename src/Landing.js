import './Landing.css';
// import Carousel from './components/carousel/carousel';
// import logo from './logo.svg';
// import Navbar from './components/navbar/navbar';
import Download from './components/download-component/download';
import PictureWriting from './components/picture-writing/picturewriting';
import TextModal from './components/text-modal/textmodal';
import MainFeatures from './components/main-features/mainfeatures';
import Quote from './components/quote/quote';
import Footer from './components/footer/footer';

function Landing() {
  return (
    <div className="Landing">
      {/* <Navbar /> */}
      {/* <Carousel /> */}
      <Download />
      <PictureWriting />
      <TextModal />
      <MainFeatures />
      <Quote />
      <Footer />
    </div>
  );
}

export default Landing;
