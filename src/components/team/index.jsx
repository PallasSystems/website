import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {LinkContainer} from "react-router-bootstrap";

function TeamPage(properties) {
    return (
        <Container fluid className="content" id="Team.Container" >
            <Row className="content-row" id="Team.Container.Row.Header">
                <Col>
                    <h1>The Team</h1>
                    <p>Launched in 2022 by Matt and Steve, our goal is to create an engineering lead business that places our customer mission first. We look to work closely with our customers to help them better understand what they actually need in order to provide better solutions.</p>
                    <p>We think teams work better when they can own problems and anyone in the team can present ideas which are evaluated based on merit. We value diversity and inclusivity a diverse teams have a wider range of ideas and the most productive teams are ones which enjoy working together.</p>
                </Col>
            </Row>
            <Row sm={3} md={4} align="center" className="content-row" id="Team.Container.Row.team">
                {properties.bios.map(data =>
                    <Col key={data.name + ".col"} id={data.name + ".col"} align="center">
                        <LinkContainer to={data.link} key={data.name + ".col.linkContainer"} >
                            <a href={data.link} className="text-dark">
                                <Card>
                                    <Card.Img alt={data.img.alt} src={data.img.src} />
                                    <Card.Text>{data.name}<br />{data.title}</Card.Text>
                                </Card>
                            </a>
                        </LinkContainer>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default TeamPage;