import { CCard, CCardBody, CCardImage, CCardTitle, CCardText} from "@coreui/react";
import Popup from './Popup';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Pagination]);

export const WorkCard = ({ title, description, imgUrl, content, keywords, picture1, picture2, picture3, picture4}) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <CCard className="h-100" style={{ width: '18rem', background:"#111111" }}>
      <CCardImage className="cardImage" orientation="top" src={imgUrl} />
      <CCardBody>
        <CCardTitle className="cardTitle">{title}</CCardTitle>
        <CCardText className="cardDescription">
          {description}
        </CCardText>
      </CCardBody>
      <button className="cardButton" onClick={togglePopup}>{t('readmore')}</button>
      {isOpen && <Popup
      content={<>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{keywords}</p>
        <div className="container py-4 px-4 justify-content-center">
              <Swiper modules={[Pagination]} navigation pagination={{ clickable: true }} className="mySwiper" slidesPerView={1} spaceBetween={50} >
                  <SwiperSlide>
                    <img className="item" src={picture1} alt="Image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="item" src={picture2} alt="Image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="item" src={picture3} alt="Image" />
                  </SwiperSlide>
            </Swiper>
          </div>
      </>}
      handleClose={togglePopup}
    />}
  </CCard>
  )
}