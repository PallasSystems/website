import React, { FC } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { BannerNavBar, Footer, SocialMediaSection } from '../../components';

// HomePage Properties
import {TeamBioPageProperties} from './TeamBio.types';

export const TeamBioPage: FC<TeamBioPageProperties> = ({ name, title, img, description, socialMedia, footerProps, navBarProps }) => {
    return (
        <main role={"main"} className={"flex-shrink-0"}>
            <BannerNavBar {...navBarProps}/>
            <Container fluid className="content" id="TeamBio.Container" >
                <Row className="content-row" id="TeamBio.Container.Row">
                    <Col sm={6} md={5} lg={3} xl={3} className="card" id={"TeamBio.Container.Row.Col.Img"}>
                        <img {...img}  className="bd-placeholder-img card-img-top img-fluid content mx-auto" />
                        <div className="text-center py-3" >
                            <SocialMediaSection {...socialMedia} />
                        </div>
                    </Col>
                    <Col sm={6} md={7} lg={9} xl={9}  id={"TeamBio.Container.Row.Col.Text"}>
                        <h2>{name} - {title}</h2>
                        { description.map((text, index) =>
                            <p id={"TeamBio.Container.Row.Col.Text." + index} key={"TeamBio.Container.Row.Col.Text." + index}>{text}</p>
                        )}
                </Col>
                </Row>
            </Container>
            <Footer {...footerProps} />
        </main>
    )
};