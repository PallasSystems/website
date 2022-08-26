import React from 'react';

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ReactComponent as AssesSVG } from './presentation.svg';
import { ReactComponent as AutomationSVG } from './automation.svg';
import { ReactComponent as IaCSVG } from './iac.svg';
import { ReactComponent as SupportSVG } from './support.svg';

function CloudServicePage() {
    return (
        <Container fluid id="Cloud.Container">
            <Row id="Cloud.Container.Row">
                <Col id="Cloud.Container.Description.Row.Col.Img" sm={6} md={5} lg={4} xl={3} xxl={2} className="float-start pt-4 pb-2 px-2" >
                    <img alt="Cloud Diagram" src="../../images/services/digitaltransformation.png" />
                </Col>
                <Col id="Cloud.Container.Description.Row.Col.Text" sm={6} md={7} lg={8} xl={9} xxl={10} >
                    <h1>How Can We Help?</h1>
                    <p className="lead">Pallas Systems will work with you to understand your current platforms and
                        services, we have experience in migrating legacy software on to a mixture of cloud platforms,
                        allowing you to decommission legacy hardware. We can also provide consultancy on refactoring
                        your software to better fit cloud architectures, providing a range of options from minimal
                        adaptions to complete rewrites to take advantage of the latest cloud services.</p>
                    <p className="lead">We are aware many businesses wish to operate in a hybrid manner, we can work
                        with you to provide a solution that meets your risk appetite.</p>
                </Col>
            </Row>
            <Row id="Cloud.Container.Description.Row.Col.Text" sm={3} md={4} align="center" className="text-dark">
                <Col id="Cloud.Container.Description.Row.Col.Text.Fail_fast" align="center">
                    <AssesSVG width='140px' height='140px' />
                    <h2>Asses</h2>
                    <p>Understand the current system and the use of it within your business before planning you next step. Does self hosted, cloud, hybrid and serverless make sense for you?</p>
                </Col>
                <Col id="Cloud.Container.Description.Row.Col.Text.Fail_fast" align="center">
                    <AutomationSVG width='140px' height='140px' />
                    <h2>Automation</h2>
                    <p>Your business has processes and rules that need to be followed, we can use automation to ensure your software follows all of them every time.</p>
                </Col>
                <Col id="Cloud.Container.Description.Row.Col.Text.Fail_fast" align="center">
                    <IaCSVG width='140px' height='140px' />
                    <h2>Infrastructure As Code</h2>
                    <p>We will define your infrastructure through code which allows your design to be audited for security and ensures your production environment can be recreated as needed.</p>
                </Col>
                <Col id="Cloud.Container.Description.Row.Col.Text.Fail_fast" align="center">
                    <SupportSVG width='140px' height='140px' />
                    <h2>Support</h2>
                    <p>No matter where your software is hosted, we can provide support to ensure high uptime of your production environment.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default CloudServicePage;