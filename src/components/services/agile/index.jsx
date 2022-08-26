import React from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ReactComponent as FailFastSVG } from './fail_fast.svg';
import { ReactComponent as KanbanSVG } from './kanban.svg';
import { ReactComponent as MvpSVG } from './mvp.svg';
import { ReactComponent as ScrumSVG } from './scrum.svg';

function AgileServicePage() {
    return (
        <Container fluid id="Agile.Container">
            <Row id="Agile.Container.Row">
                <Col id="Agile.Container.Description.Row.Col.Img" sm={12} md={4} lg={3} xl={3} xxl={3} className="float-start pt-4 pb-2 px-2" >
                    <img alt="Agile Scrum Development Diagram" src="../../images/services/agile.svg" />
                </Col>
                <Col id="Agile.Container.Description.Row.Col.Text" sm={12} md={8} lg={9} xl={9} xxl={9} >
                    <h1>How Can We Help?</h1>
                    <p>Pallas Systems places your vision at the heart of delivery. We use Agile Scrum to quickly deliver a working product with the plan to iterate based on your feedback. Allowing you to better define your vision and the problem space to ensure you get the solution you want.</p>
                    <p>We recognise your organisation has its own rules, processes and procedures. Rather than dictate a single Agile Scrum approach we understand Agile is a <a href="https://agilemanifesto.org/">set of principles</a> and so look to build a process which integrates with your business.</p>
                    <p>We operate Agile DevSecOps teams to provide development and support of products. We are experienced in using ITIL and Kanban to support production and take advantage of capacity planning to ensure development remains predictable.</p>
                </Col>
            </Row>
            <Row id="Agile.Container.Description.Row.Col.Text" sm={3} md={4} align="center" className="text-dark">
                <Col id="Agile.Container.Description.Row.Col.Text.Fail_fast" align="center">
                    <FailFastSVG width='140px' height='140px' />
                    <h2>Fail Fast</h2>
                    <p>Tackle the greatest unknowns first to ensure you aren't trying to achieve the impossible</p>
                </Col>
                <Col id="Agile.Container.Description.Row.Col.Text.Kanban" align="center">
                    <KanbanSVG width='140px' height='140px' />
                    <h2>Kanban</h2>
                    <p>Integrate Kanban into your Agile process to support production</p>
                </Col>
                <Col id="Agile.Container.Description.Row.Col.Text.MVP" align="center">
                    <MvpSVG width='140px' height='140px' />
                    <h2>Minimum Viable Product</h2>
                    <p>Plan to receive a working product as soon as possible and then iterate towards your solution</p>
                </Col>
                <Col id="Agile.Container.Description.Row.Col.Text.Scrum" align="center">
                    <ScrumSVG width='140px' height='140px' />
                    <h2>Scrum</h2>
                    <p>Scrum allows us to regularly track the progress of delivery and helps to maintain focus on your vision</p>
                </Col>
            </Row>
        </Container>
    );
}

export default AgileServicePage;