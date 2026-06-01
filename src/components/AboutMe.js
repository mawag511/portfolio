import { Container, Row } from "react-bootstrap"
import { useTranslation } from 'react-i18next';
import myPDF_eng from "../assets/cvs/CV_Maria_(eng).pdf";
import myPDF_ita from "../assets/cvs/CV_Maria_(ita).pdf";
import myPDF_rus from "../assets/cvs/CV_Maria_(rus).pdf";

export const AboutMe = () => {
    const { t, i18n } = useTranslation();
    const cvFiles = {
        en: myPDF_eng,
        it: myPDF_ita,
        ru: myPDF_rus
    };
    const cvTitles = {
        en: "Maria's_CV_2026.pdf",
        it: "CV_Maria_2026.pdf",
        ru: "Мария_Резюме_2026.pdf"
    };
    const currentCV = cvFiles[i18n.language] || myPDF_eng;
    const currentTitle = cvTitles[i18n.language] || "Maria's_CV_2026.pdf";

    return (
        <section className="about-me" id="about-me">
            <Container>
            <Row>
                <h1 >{t('aboutme.aboutme')}</h1>
            </Row>  
                <Row className="align-items-center">
                    <div className="abme-square">
                        <h2>
                            {t('aboutme.h1')}
                            <p>&nbsp; {t('aboutme.u1')}</p> 
                            <p>&nbsp; {t('aboutme.u2')}</p>
                        </h2>
                        <h2>
                            {t('aboutme.h2')}
                            <p>&nbsp; - MIA Digital University; </p> 
                            <p>&nbsp; - UDIMA University </p> 
                        </h2>
                        <h2>
                            {t('aboutme.h3')}
                        </h2>
                        <h2>
                            {t('aboutme.h4')} <a href="https://www.comnews-conferences.ru/ru/conference/awards2025/postreliz">ComNews Awards 2025</a>;
                        </h2>
                        <h2>
                            {t('aboutme.h5')}
                        </h2>
                        <h2>
                            {t('aboutme.h6')}
                        </h2>
                    </div>
                </Row>
                <Row>
                    <h3 className="download">{t('aboutme.cv')}</h3>
                   
                </Row>
                    <a href={currentCV} download={currentTitle}><button className="cv">{t('aboutme.cv_btn')}</button></a>
            </Container>
        </section>
    )
}