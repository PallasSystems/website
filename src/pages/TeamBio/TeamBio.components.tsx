import React, { FC } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {LinkContainer} from "react-router-bootstrap";

import { BannerNavBar, Footer } from '../../components';

// HomePage Properties
import {TeamBioPageProperties} from './TeamBio.types';

export const TeamBioPage: FC<TeamBioPageProperties> = ({ name, title, footerProps, navBarProps }) => {
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
            </Container>
            <Footer {...footerProps} />
        </main>
    )
};