import React from 'react';
import './style.css';
import map from '../../assets/images/t1cg-map.png';

//Components
import Wrapper from '../../components/Wrapper';
import { Container, Row, Col } from '../../components/Grid';

//a different way to render components.
const About = () => (
    <Wrapper>
        <Container fluid={true}>
            <Row classNames="mt-4">
                <Col size={'lg-12'}>
                    <h1 className="about-header">About Us</h1>
                    <p className="about-text">
                        Tier 1 Consulting Group is a small, domestic technology
                        services provider, primarily focused on supporting the
                        healthcare IT industry, with core strength in helping
                        organizations transition from the traditional command
                        and control process orientation to the practice of Agile
                        values and behaviors. Although many organizations large
                        and small have adopted Agile-like ceremonies, tools, and
                        methods, without the needed culture change from top to
                        bottom, the outcome will be inconsistent and ephemeral.
                    </p>
                </Col>
                <Col size={'lg-12'}>
                    <h1 className="about-header">Accomplishments</h1>
                    <p className="about-text">
                        Nunc pharetra finibus est at efficitur. Praesent sed
                        congue diam. Integer gravida dui mauris, ut interdum
                        nunc egestas sed. Aenean sed mollis diam. Nunc aliquet
                        risus ac finibus porta. Nam quis arcu non lectus
                        tincidunt fermentum. Suspendisse aliquet orci porta quam
                        semper imperdiet. Praesent euismod mi justo, faucibus
                        scelerisque risus cursus in. Sed rhoncus mollis diam,
                        sit amet facilisis lectus blandit at.
                    </p>
                </Col>
                <Col size={'lg-12'}>
                    <h1 className="about-header">Company/Meetup</h1>
                    <p className="about-text">
                        Tier 1 Consulting Group hosts a monthly meet up called
                        Web Development 101. This meetup serves as an
                        educational course for folks who are new to web
                        development or are interested in it, a supplemental
                        resource for students who are currently enrolled, as
                        well as an oppertunity to meet and connect with others
                        on the same journey. This meetup occurs every 2nd
                        wednesday of each month. FREE FOOD and DRINKS are
                        provided! What more could you ask for? RSVP to our next
                        event today!
                    </p>
                </Col>
                <Col size={'lg-6'}>
                    <img
                        className="map-img"
                        src={map}
                        alt="map of office location"
                    ></img>
                </Col>
                <Col size={'lg-3'}>
                    <h2 className="about-header">Address</h2>
                    <p className="address-text-first">Columbia Office</p>
                    <p className="address-text">10420 Little Patuxent Pkwy</p>
                    <p className="address-text">Suite 440</p>
                    <p className="address-text">Columbia, MD 21044</p>
                </Col>
                <Col size={'lg-3'}>
                    <h2 className="about-header">Contact Info</h2>
                    <p className="address-text-first">
                        <i className="social-icon fas fa-envelope"></i>
                        info@t1cg.io
                    </p>
                    <p className="address-text">
                        <i className="social-icon fas fa-phone-square"></i>410 -
                        910 - 2531
                    </p>
                </Col>
            </Row>
        </Container>
    </Wrapper>
);

export default About;
