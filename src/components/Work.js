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

export const Work = () => {

  const works = [
    {
      title: "Filmer",
      description: "Discord Bot",
      imgUrl: proj1Img1,
      content: "The purpose of the bot is to maintain a database of movies and videogames that are to be watched/played or that have been watched/played already. Moreover, the bot can also randomly decide a movie or game for the server to watch/play (among the ones saved in the DB).",
      keywords: "Keywords: Discord, Python, SQLite DB (for the moment), Symmetric Key Encryption",
      picture1: proj1Img2,
      picture2: proj1Img3,
      picture3: proj1Img4
    },
    {
      title: "Client Support Bot",
      description: "Telegram Bot",
      imgUrl: proj2Img1,
      content: "Works as a customer support service for companies and firms that work with injectors and similar technical equipment. The bot is able to send information (upon request) about the firm itself, about injectors and about their availability. It can also save a user's chat ID in order to notify them about an injector's availability later on, in case the injector they looked for was not available when requested.", 
      keywords: "Keywords: Telegram, Python, SQLite DB, Machine Learning, Jupyter Notebook, Sequential Model",
      picture1: proj2Img2,
      picture2: proj2Img3,
      picture3: proj2Img4,
    },
    {
      title: "Unscammed",
      description: "Desktop Application",
      imgUrl: proj3Img1,
      content: "Software where user input is checked against three different algorithms on whether it is a spam/scam or ham message. Different datasets were used in order to train a Naive-Bayes, a Logistic Regression and a SVM algorithm, which are then imported to the back-end of the application and worked with.", 
      keywords: "Keywords: Python, PyQT5, Machine Learning, Jupyter Notebook, Naive-Bayes Model, Logistic Regression Model, Support Vector Machine Model",
      picture1: proj3Img2,
      picture2: proj3Img3,
      picture3: proj3Img4,
    },
    {
      title: "DWH 'Par'",
      description: "Data Warehouse and BI System",
      imgUrl: proj4Img1,
      content: "Simulation of the creation of an online shop's Data WareHouse, with its ETL process and BI visualization. Provided below are the Logical ER Model, the DAG's Pipeline and the Dashboard Mockup.",
      keywords: "Keywords: DWH, BI, PostgreSQL, Inmon's methodology, ETL, Apache Airflow, PIX BI",
      picture1: proj4Img2,
      picture2: proj4Img3,
      picture3: proj4Img4
    },
    {
      title: "Common Rail Piezo Injector Tester",
      description: "Desktop Application",
      imgUrl: proj5Img1,
      content: "Software useful when it comes to registering injector tests (their values and graphs when possible) of different clients. Aside from saving test results, injectors and client information in the database, the software also allows to export a PDF with the necessary data.",
      keywords: "Keywords: C#, Winforms, SQLite DB, Generic Repository Pattern",
      picture1: proj5Img2,
      picture2: proj5Img3,
      picture3: proj5Img4
    },
    {
      title: "Denso QR Coder", 
      description: "Android Application",
      imgUrl: proj6Img1,
      content: "Database of Denso injectors, which allows to CODE inserted test values into the injector code or DECODE the inputted code into test values.",
      keywords: "Keywords: Kotlin, Room, Model-View-ViewModel pattern",
      picture1: proj6Img2,
      picture2: proj6Img3,
      picture3: proj6Img4,
     
    },
    {
      title: "Bosch IMA Data", 
      description: "Android Application",
      imgUrl: proj7Img1,
      content: "Database of BOSCH injectors (IMA 6-7-9 and ISA 7), which allows to CODE inserted test values (including ISA letter for ISA 7) into the injector code.",
      keywords: "Keywords: Kotlin, Room, Model-View-ViewModel pattern",
      picture1: proj7Img2,
      picture2: proj7Img3,
      picture3: proj7Img4,
     
    },
    {
      title: "Pet Finder",
      description: "Android Application",
      imgUrl: proj8Img1,
      content: "Android application possibly useful for animal shelters and volunteers. The purpose is to save a route/walk done by the user and add information about stray animals seen during it. The app can be useful to monitor the life and/or problems of stray animals in the area.",
      keywords: "Keywords: Kotlin, Room, Model-View-ViewModel pattern, Google Maps API",
      picture1: proj8Img2,
      picture2: proj8Img3,
      picture3: proj8Img4
    },
    {
      title: "Pepe Card Game",
      description: "Browser Webpage/Webgame",
      imgUrl: proj9Img1,
      content: "Browser Memory Card Game that includes a single-player mode (with easy, medium and hard difficulties) as well as a local multi-player mode that goes up to 4 players.",
      keywords: "Keywords: HTML, CSS, JavaScript",
      picture1: proj9Img2,
      picture2: proj9Img3,
      picture3: proj9Img4
    }
  ];
  
    return (
        <section className="work" id="my-work">
          <Container>
            <Row>
              <h2 className="title">My Work</h2>
              <p className="paragraph">Below you can find some projects I've worked on, including the university ones I'm most proud of as well as my internship ones and independent projects I made for personal (and not only) usage</p>
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





