import React from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ReactComponent as AnalyticsSVG } from './analytic_small.svg';

function DevSecOpsServicePage() {
    return (
        <Container fluid id="Analytics.Container">
            <Row id="Analytics.Container.Row">
                <Col id="Analytics.Container.Description.Row.Col.Img" sm={12} md={12} lg={5} xl={4} xxl={3} className="float-start pt-4 pb-2 px-2" >
                    <AnalyticsSVG width='140px' height='140px' />
                </Col>
                <Col id="Analytics.Container.Description.Row.Col.Text" sm={12} md={12} lg={7} xl={8} xxl={9} >
                    <h1>How Can We Help?</h1>
                    <p>Pallas is able to build analytics and federation services to meet the needs of your business. We don&apos;t assume Machine Learning is the answer but instead look to understand your data and specific ask and present an approach we think best suits your needs.</p>
                    <p>We combine data engineering expertise with our analytic writing, this means we will look to hold your source data within a data lake and setup scalable Extract Load Transform architectures to feed the analytics we develop. This ensure you analytics can be quickly adapted as your data evolves.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default DevSecOpsServicePage;