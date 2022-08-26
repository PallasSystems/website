import React from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { LinkContainer } from 'react-router-bootstrap';

import { data } from './data';
import { ReactComponent as AgileSVG } from './agile/agile_small.svg';
import { ReactComponent as CloudSVG } from './cloud/cloud_small.svg';
import { ReactComponent as DevSecOpsSVG } from './devsecops/devsecops_small.svg';
import { ReactComponent as DevEngSVG } from './dataeng/dataeng_small.svg';
import { ReactComponent as AnalyticsSVG } from './analytics/analytic_small.svg';

function index() {
    return (
        <main role={"main"}>
            <Container fluid className="content">
                <Row className="content-row">
                    <h1>What can we do to help?</h1>
                    <p className="lead">Pallas Systems combines DevSecOps with Agile Scrum to shorten the feedback loop.
                        We will use Continuous Integration (CI) & Continuous Deployment (CD) pipelines to automate build
                        and deployment so we are able to quickly implement your ideas. This allows us to better
                        elaborate your problem space and ensure we are focussed on delivering your vision.</p>
                    <p className="lead">Pallas Systems has delivered self hosted platform migrations, cloud
                        transformations.</p>
                    <p className="lead">At Pallas Systems we believe your mission should be the priority and will look
                        to deliver to your needs as soon as possible to maximise the impact of our work.</p>
                </Row>
                <Row sm={2} md={3} align="center">
                    {data.map(data =>
                        <Col key={data.title + ".col"} id={data.title + ".col"} align="center">
                            <LinkContainer to={data.link} key={data.title + ".col.linkContainer"} >
                                <a key={data.title + ".col.linkContainer.a"} href={data.link} className="text-dark">
                                    {data.img === './agile/agile_small.svg' ? <AgileSVG width='140px' height='140px' /> : null}
                                    {data.img === './cloud/cloud_small.svg' ? <CloudSVG width='140px' height='140px' /> : null}
                                    {data.img === './devsecops/devsecops_small.svg' ? <DevSecOpsSVG width='140px' height='140px' /> : null}
                                    {data.img === './dataeng/dataeng_small.svg' ? <DevEngSVG width='140px' height='140px' /> : null}
                                    {data.img === './analytics/analytic_small.svg' ? <AnalyticsSVG width='140px' height='140px' /> : null}
                                    <h2>{data.title}</h2>
                                    {data.description.map(text =>
                                        <p key={data.title + ".col.linkContainer.a.p"}>{text}</p>
                                    )}
                                </a>
                            </LinkContainer>
                        </Col>
                    )}
                </Row>
            </Container>
        </main>
    );
}

export default index;