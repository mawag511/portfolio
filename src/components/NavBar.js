import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === '#home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                            {t('navigation.home')}
                        </Nav.Link>
                        <Nav.Link href="#about-me" className={activeLink === '#about-me' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>
                            {t('navigation.about')}
                        </Nav.Link>
                        <Nav.Link href="#my-work" className={activeLink === '#my-work' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('my-work')}>
                            {t('navigation.projects')}
                        </Nav.Link>
                    </Nav>
                    <p></p>
                </Navbar.Collapse>
                <Nav className="ms-auto">
                    <select 
                        value={i18n.language} 
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        className="form-select"
                    >
                        <option value="en">🇬🇧</option>
                        <option value="it">🇮🇹</option>
                        <option value="ru">🇷🇺</option>
                    </select>
                </Nav>
            </Container>
        </Navbar>
    );
}

