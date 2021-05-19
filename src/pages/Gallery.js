import React, { Fragment } from "react";
import Modal from 'react-modal';
import Navigation from './Navigation';
import gallery_poems_01 from "../img/gallery_poems_01.png";
import gallery_poems_02 from "../img/gallery_poems_02.png";
import gallery_poems_03 from "../img/gallery_poems_03.png";
import gallery_poems_04 from "../img/gallery_poems_04.png";
import gallery_poems_04_01 from "../img/gallery_poems_04_01.png";
import gallery_poems_04_02 from "../img/gallery_poems_04_02.png";
import gallery_poems_05 from "../img/gallery_poems_05.png";
import gallery_poems_06 from "../img/gallery_poems_06.png";
import gallery_poems_07 from "../img/gallery_poems_07.png";
import gallery_poems_08 from "../img/gallery_poems_08.png";
import gallery_poems_09 from "../img/gallery_poems_09.png";
import gallery_poems_10 from "../img/gallery_poems_10.jpg";
import gallery_poems_11 from "../img/gallery_poems_11.jpg";
import gallery_poems_12 from "../img/gallery_poems_12.jpg";
import gallery_poems_13 from "../img/gallery_poems_13.png";
import gallery_2020_03_01 from "../img/gallery_2020_03_01.png";
import gallery_2020_03_02 from "../img/gallery_2020_03_02.jpg";
import gallery_2020_01_01 from "../img/gallery_2020_01_01.jpg";
import gallery_2020_01_02 from "../img/gallery_2020_01_02.jpg";
import gallery_2020_01_03 from "../img/gallery_2020_01_03.jpg";
import gallery_2020_01_04 from "../img/gallery_2020_01_04.jpg";
import gallery_2020_01_05 from "../img/gallery_2020_01_05.jpg";
import gallery_2020_01_06 from "../img/gallery_2020_01_06.jpg";
import gallery_2019_12_01 from "../img/gallery_2019_12_01.jpg";
import gallery_2019_12_02 from "../img/gallery_2019_12_02.jpg";
import gallery_2019_12_03 from "../img/gallery_2019_12_03.jpg";
import gallery_2019_12_04 from "../img/gallery_2019_12_04.jpg";
import gallery_2019_12_05 from "../img/gallery_2019_12_05.jpg";
import gallery_2019_12_06 from "../img/gallery_2019_12_06.jpg";
import gallery_2019_11_01 from "../img/gallery_2019_11_01.jpg";
import gallery_01 from "../img/gallery_01.jpg";
import gallery_02 from "../img/gallery_02.jpg";
import gallery_03 from "../img/gallery_03.jpg";
import gallery_04 from "../img/gallery_04.jpg";
import gallery_05 from "../img/gallery_05.jpg";
import gallery_06 from "../img/gallery_06.png";
import gallery_07 from "../img/gallery_07.jpg";
import gallery_08 from "../img/gallery_08.jpg";
import gallery_09 from "../img/gallery_09.jpg";
import gallery_10 from "../img/gallery_10.jpg";
import gallery_11 from "../img/gallery_11.jpg";
import gallery_12 from "../img/gallery_12.png";
import gallery_13 from "../img/gallery_13.png";
import gallery_14 from "../img/gallery_14.png";
import gallery_15 from "../img/gallery_15.png";
import gallery_16 from "../img/gallery_16.jpg";
import gallery_17 from "../img/gallery_17.jpg";
import gallery_18 from "../img/gallery_18.jpg";
import gallery_19 from "../img/gallery_19.jpg";
import gallery_20 from "../img/gallery_20.png";
import gallery_21 from "../img/gallery_21.png";
import gallery_22 from "../img/gallery_22.png";
import gallery_23 from "../img/gallery_23.png";
import gallery_24 from "../img/gallery_24.jpg";
import gallery_25 from "../img/gallery_25.png";
import gallery_26 from "../img/gallery_26.jpg";
import gallery_27 from "../img/gallery_27.jpg";
import gallery_28 from "../img/gallery_28.jpg";
import gallery_29 from "../img/gallery_29.jpg";
import gallery_30 from "../img/gallery_30.jpg";
import crepe_collection from '../img/Crepe_collection.png';
import gallery_lydia from '../img/Les 3 graines de Lydia.jpg';
import gallery_sunflower from '../img/Sunflower competition 1.png';
import gallery_chronicle_2021_05_13 from '../img/21-05-13 Chronicle article.png';

const Gallery = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalSrc, setModalSrc] = React.useState();

  const openModal = ({ src_ }) => {
    setIsOpen(true);
    setModalSrc(src_);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const SetupImg = ({ class_, src_ }) => {
    return (
      <div className={class_}>
        <span className="image fit cursor-pointer">
          <img src={src_} className="with-border" alt="" onClick={() => openModal({ src_ })}></img>
        </span>
      </div >
    );
  };

  return (
    <Fragment>
      <Navigation subpage="subpage"></Navigation>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      // style={customStyles}
      >
        <div className="modal-background align-center">
          <button onClick={closeModal}>close</button>
          <br></br>
          <br></br>
          <img className="modal-content" src={modalSrc} alt=""></img>
        </div>
      </Modal>
      <section id="three" className="wrapper special">
        <div className="inner">
          <header className="align-center">
            <h2>Gallery</h2>
          </header>
          <div className="box alt">
            <h3 className="align-left">May 2021 : La compétition des tournesols</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_chronicle_2021_05_13}></SetupImg>
              <SetupImg class_="4u" src_={gallery_sunflower}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_lydia}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">February 2021 : La fête des crêpes</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u$" src_={crepe_collection}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">July 2020 : La fête de la poésie</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_poems_01}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_02}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_poems_03}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_04}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_04_01}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_poems_04_02}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_05}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_06}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_poems_07}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_08}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_09}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_poems_10}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_11}></SetupImg>
              <SetupImg class_="4u" src_={gallery_poems_12}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_poems_13}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">March 2020</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_2020_03_01}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_2020_03_02}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">January 2020 : Galette des Rois</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_2020_01_01}></SetupImg>
              <SetupImg class_="4u" src_={gallery_2020_01_02}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_2020_01_03}></SetupImg>
              <SetupImg class_="4u" src_={gallery_2020_01_04}></SetupImg>
              <SetupImg class_="4u" src_={gallery_2020_01_05}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_2020_01_06}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">December 2019 : Pour fêter Noël</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_2019_12_01}></SetupImg>
              <SetupImg class_="4u" src_={gallery_2019_12_02}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_2019_12_03}></SetupImg>
              <SetupImg class_="4u" src_={gallery_2019_12_04}></SetupImg>
              <SetupImg class_="4u" src_={gallery_2019_12_05}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_2019_12_06}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">November 2019</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u$" src_={gallery_2019_11_01}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">September 2019</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u$" src_={gallery_01}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">July 2019 : Boules tournament</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_02}></SetupImg>
              <SetupImg class_="4u" src_={gallery_03}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_04}></SetupImg>
              <SetupImg class_="4u" src_={gallery_05}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_06}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">June 2019 : French evening</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_07}></SetupImg>
              <SetupImg class_="4u" src_={gallery_08}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_09}></SetupImg>
              <SetupImg class_="4u" src_={gallery_10}></SetupImg>
              <SetupImg class_="4u" src_={gallery_11}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_12}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">April 2019 : Barcroft Primary School fashion show</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_13}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_14}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">March 2019 : Class visit to Nice</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_15}></SetupImg>
              <SetupImg class_="4u" src_={gallery_16}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_17}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_18}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">January 2019</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_19}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_20}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">October 2018</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_21}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">July 2018</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_22}></SetupImg>
              <SetupImg class_="4u" src_={gallery_23}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_24}></SetupImg>
              <SetupImg class_="4u" src_={gallery_25}></SetupImg>
              <SetupImg class_="4u" src_={gallery_26}></SetupImg>
              <SetupImg class_="4u$" src_={gallery_27}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">June 2018</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u$" src_={gallery_28}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">February 2018</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u" src_={gallery_29}></SetupImg>
            </div>
            <br></br>
            <h3 className="align-left">November 2017</h3>
            <div className="row 50% uniform">
              <SetupImg class_="4u$" src_={gallery_30}></SetupImg>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Gallery;

