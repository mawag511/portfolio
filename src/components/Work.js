import { Container, Row, Col } from "react-bootstrap";
import { CRow } from "@coreui/react";
import { WorkCard } from "./WorkCard";
import proj1Img1 from "../assets/webp/filmer1.webp";
import proj1Img2 from "../assets/webp/filmer2.webp";
import proj1Img3 from "../assets/webp/filmer3.webp";
import proj1Img4 from "../assets/webp/filmer4.webp";
import proj2Img1 from "../assets/webp/cbot1.webp";
import proj2Img2 from "../assets/webp/cbot2.webp";
import proj2Img3 from "../assets/webp/cbot3.webp";
import proj2Img4 from "../assets/webp/cbot4.webp";
import proj3Img1 from "../assets/webp/unscammed1.webp";
import proj3Img2 from "../assets/webp/unscammed2.webp";
import proj3Img3 from "../assets/webp/unscammed3.webp";
import proj3Img4 from "../assets/webp/unscammed4.webp";
import proj4Img1 from "../assets/webp/gameDWH1.webp";
import proj4Img2 from "../assets/webp/gameDWH2.webp";
import proj4Img3 from "../assets/webp/gameDWH3.webp";
import proj4Img4 from "../assets/webp/gameDWH4.webp";
import proj5Img1 from "../assets/webp/crpit1.webp";
import proj5Img2 from "../assets/webp/crpit2.webp";
import proj5Img3 from "../assets/webp/crpit3.webp";
import proj5Img4 from "../assets/webp/crpit4.webp";
import proj6Img1 from "../assets/webp//denso_qr_coder1.webp";
import proj6Img2 from "../assets/webp/denso_qr_coder2.webp";
import proj6Img3 from "../assets/webp/denso_qr_coder3.webp";
import proj6Img4 from "../assets/webp/denso_qr_coder4.webp";
import proj7Img1 from "../assets/webp/bosch_ima_data1.webp";
import proj7Img2 from "../assets/webp/bosch_ima_data2.webp";
import proj7Img3 from "../assets/webp/bosch_ima_data3.webp";
import proj7Img4 from "../assets/webp/bosch_ima_data4.webp";
import proj8Img1 from "../assets/webp/petfinder1.webp";
import proj8Img2 from "../assets/webp/petfinder2.webp";
import proj8Img3 from "../assets/webp/petfinder3.webp";
import proj8Img4 from "../assets/webp/petfinder4.webp";
import proj9Img1 from "../assets/webp/memory1.webp";
import proj9Img2 from "../assets/webp/memory2.webp";
import proj9Img3 from "../assets/webp/memory3.webp";
import proj9Img4 from "../assets/webp/memory4.webp";
import { useTranslation } from "react-i18next";

export const Work = () => {
  const { t, i18n } = useTranslation();

  const works = [
    {
      title: t('projects.project_1.title'),
      description: t('projects.project_1.description'),
      imgUrl: proj1Img1,
      content: t('projects.project_1.content'),
      keywords: t('projects.project_1.keywords'),
      picture1: proj1Img2,
      picture2: proj1Img3,
      picture3: proj1Img4
    },
    {
      title: t('projects.project_2.title'),
      description: t('projects.project_2.description'),
      imgUrl: proj2Img1,
      content: t('projects.project_2.content'),
      keywords: t('projects.project_2.keywords'),
      picture1: proj2Img2,
      picture2: proj2Img3,
      picture3: proj2Img4,
    },
    {
      title: t('projects.project_3.title'),
      description: t('projects.project_3.description'),
      imgUrl: proj3Img1,
      content: t('projects.project_3.content'),
      keywords: t('projects.project_3.keywords'),
      picture1: proj3Img2,
      picture2: proj3Img3,
      picture3: proj3Img4,
    },
    {
      title: t('projects.project_4.title'),
      description: t('projects.project_4.description'),
      imgUrl: proj4Img1,
      content: t('projects.project_4.content'),
      keywords: t('projects.project_4.keywords'),
      picture1: proj4Img2,
      picture2: proj4Img3,
      picture3: proj4Img4
    },
    {
      title: t('projects.project_5.title'),
      description: t('projects.project_5.description'),
      imgUrl: proj5Img1,
      content: t('projects.project_5.content'),
      keywords: t('projects.project_5.keywords'),
      picture1: proj5Img2,
      picture2: proj5Img3,
      picture3: proj5Img4
    },
    {
      title: t('projects.project_6.title'),
      description: t('projects.project_6.description'),
      imgUrl: proj6Img1,
      content: t('projects.project_6.content'),
      keywords: t('projects.project_6.keywords'),
      picture1: proj6Img2,
      picture2: proj6Img3,
      picture3: proj6Img4,
     
    },
    {
      title: t('projects.project_7.title'), 
      description: t('projects.project_7.description'),
      imgUrl: proj7Img1,
      content: t('projects.project_7.content'),
      keywords: t('projects.project_7.keywords'),
      picture1: proj7Img2,
      picture2: proj7Img3,
      picture3: proj7Img4,
     
    },
    {
      title: t('projects.project_8.title'), 
      description: t('projects.project_8.description'),
      imgUrl: proj8Img1,
      content: t('projects.project_8.content'),
      keywords: t('projects.project_8.keywords'),
      picture1: proj8Img2,
      picture2: proj8Img3,
      picture3: proj8Img4
    },
    {
      title: t('projects.project_9.title'), 
      description: t('projects.project_9.description'),
      imgUrl: proj9Img1,
      content: t('projects.project_9.content'),
      keywords: t('projects.project_9.keywords'),
      picture1: proj9Img2,
      picture2: proj9Img3,
      picture3: proj9Img4
    }
  ];
  
    return (
        <section className="work" id="my-work">
          <Container>
            <Row>
              <h2 className="title">{t('projects.h1')}</h2>
              <p className="paragraph">{t('projects.description')}</p>
            </Row>
            <Row>
              <Col size={12}>
                <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
                  {
                    works.map((work, index) => {
                      return (
                        <WorkCard
                          key={index}
                          {...work}
                        />
                      )
                    })
                  }
                </CRow>
              </Col>
            </Row>
          </Container>
        </section>
    )
}





