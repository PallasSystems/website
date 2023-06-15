import React, { FC } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {LinkContainer} from "react-router-bootstrap";

import { BannerNavBar, Footer } from '../../components';

// HomePage Properties
import {TeamPageProperties} from './Team.types';
import {TeamBiosData} from './Team.data';
import { TeamBioPageProperties } from '../TeamBio';

export const TeamPage: FC<TeamPageProperties> = ({ bios, footerProps, navBarProps }) => {

    const teamBios: TeamBioPageProperties[] = undefined === bios || null === bios ? TeamBiosData : bios;

    return (
        <main role={"main"} className={"flex-shrink-0"}>
            <BannerNavBar {...navBarProps}/>
            <Container fluid className="content" id="Team.Container" >
                <Row className="content-row" id="Team.Container.Row.Header">
                    <Col>
                        <h1>The Team</h1>
                        <p>Launched in 2022 by Matt and Steve, our goal is to create an engineering lead business that places our customer mission first. We look to work closely with our customers to help them better understand what they actually need in order to provide better solutions.</p>
                        <p>We think teams work better when they can own problems and anyone in the team can present ideas which are evaluated based on merit. We value diversity and inclusivity a diverse teams have a wider range of ideas and the most productive teams are ones which enjoy working together.</p>
                    </Col>
                </Row>
                <Row sm={3} md={4} align="center" className="content-row" id="Team.Container.Row.team">
                { teamBios.map(({ name, title, img, link }) =>
                    <Col key={name + ".col"} id={name + ".col"} align="center">
                        <LinkContainer to={link} key={name + ".col.linkContainer"} >
                            <a href={link} className="text-dark">
                                <Card>
                                    <Card.Img alt={img.alt} src={img.src} />
                                    <Card.Text>{name}<br />{title}</Card.Text>
                                </Card>
                            </a>
                        </LinkContainer>
                    </Col>
                )}
                </Row>
            </Container>
            <Footer {...footerProps} />
        </main>
    )
};