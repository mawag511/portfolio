import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Software engineer..." ];
    const period = 2000;
    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
        <section className="banner" id="home">
            <Container>
            <h1 className="moving-text"><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer..." ]'><span className="wrap">{text}</span></span></h1>
                <Row className="align-items-center">
                    <h1 className="intro">{t('banner.greeting')}</h1>
                </Row>
            </Container>
        </section>
    )
}