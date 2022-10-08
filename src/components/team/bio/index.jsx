import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Social Media specific icons
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';

function valueExists(value) {
    return typeof value === "string";
}

export default function Index(properties) {
    return (
    <main role={"main"} class={"flex-shrink-0"}>
        <Container fluid className="content" id={properties.bio.name + ".Bio.Container"} key={properties.bio.name + ".Bio.Container"}>
            <Row className="content-row" id={properties.bio.name + ".Bio.Container.Row"}>
                <Col sm={6} md={5} lg={3} xl={3} className="card" id={properties.bio.name + ".Bio.Container.Row.Col.card"}>
                    <img alt={properties.bio.img.alt} src={"../.." + properties.bio.img.src} className="bd-placeholder-img card-img-top img-fluid content mx-auto" />
                    <div className="text-center py-3" id={properties.bio.name + ".Bio.Container.Row.Col.card.social.media"}>
                        { valueExists(properties.bio.facebook) ? <a className="me-1 text-dark" href={properties.bio.facebook}><Facebook /></a> : null }
                        { valueExists(properties.bio.github) ? <a className="me-1 text-dark" href={properties.bio.github}><Github /></a> : null }
                        { valueExists(properties.bio.instagram) ? <a className="me-1 text-dark" href={properties.bio.instagram}><Instagram /></a> : null }
                        { valueExists(properties.bio.linkedin) ? <a className="me-1 text-dark" href={properties.bio.linkedin}><Linkedin /></a> : null }
                        { valueExists(properties.bio.twitter) ? <a className="me-1 text-dark" href={properties.bio.twitter}><Twitter /></a> : null }
                    </div>
                </Col>
                <Col sm={6} md={7} lg={9} xl={9}  id={properties.bio.name + ".Bio.Container.Row.Col.text"}>
                    <h2>{properties.bio.name} - {properties.bio.title}</h2>
                    {properties.bio.description.map((text, index) =>
                      <p id={properties.bio.name + ".Bio.Container.Row.Col.text." + index} key={properties.bio.name + ".Bio.Container.Row.Col.text." + index}>{text}</p>
                    )}
                </Col>
            </Row>
        </Container>
    </main>
    );
}