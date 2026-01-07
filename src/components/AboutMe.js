import { Container, Row } from "react-bootstrap"
import myPDF from "../assets/CV.pdf";

export const AboutMe = () => {
    return (
        <section className="about-me" id="about-me">
            <Container>
            <Row>
                <h1 >{`A bit about me:`}</h1>
            </Row>  
                <Row className="align-items-center">
                    <div className="abme-square">
                        <h2>
                            • Graduated from: 
                            <p>&nbsp; - Cardiff MET University in Software Engineering; </p> 
                            <p>&nbsp; - Varna University of Management in Software Systems and Technologies </p>
                        </h2>
                        <h2>
                            • Mastered in Computer Science (with focus on Cyber Security, Data Analytics and Artificial Intelligence) from: 
                            <p>&nbsp; - MIA Digital University; </p> 
                            <p>&nbsp; - UDIMA University </p> 
                        </h2>
                        <h2>
                            • Worked with several SQL Database Management Systems (both OLTP and OLAP);
                        </h2>
                        <h2>
                            • Worked in the team that won the "Best project for DWH integration in retail" award in <a href="https://www.comnews-conferences.ru/ru/conference/awards2025/postreliz">ComNews Awards 2025</a>;
                        </h2>
                        <h2>
                            • Worked on commercialized projects written in Kotlin (for android apps) and C# (for windows desktop apps);
                        </h2>
                        <h2>
                            • Have experience with programming and testing in Python.
                        </h2>
                    </div>
                </Row>
                <Row>
                    <h3 className="download"> Download my CV: </h3>
                   
                </Row>
                    <a href={myPDF} download="Maria's_CV.pdf"><button className="cv"> Curriculum Vitae</button></a>
            </Container>
        </section>
    )
}