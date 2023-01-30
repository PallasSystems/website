import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ReactComponent as AutomationSVG } from './automation.svg';
import { ReactComponent as CdSVG } from './cd.svg';
import { ReactComponent as CiSVG } from './ci.svg';
import { ReactComponent as IaCSVG } from './iac.svg';
import { ReactComponent as SupportSVG } from './support.svg';
import { ReactComponent as TestingSVG } from './testing.svg';

function DevSecOpsServicePage() {
    return (
        <Container fluid id="DevSecOps.Container">
            <Row id="DevSecOps.Container.Row">
                <Col id="DevSecOps.Container.Description.Row.Col.Img" sm={12} md={12} lg={5} xl={4} xxl={3} className="float-start pt-4 pb-2 px-2" >
                    <img alt="DevSecOps Diagram" src="/images/services/devsecops.svg" />
                </Col>
                <Col id="DevSecOps.Container.Description.Row.Col.Text" sm={12} md={12} lg={7} xl={8} xxl={9} >
                    <h1>How Can We Help?</h1>
                    <p>We use DevSecOps to shorten the feedback loop, to be able to take your idea&apos;s and bring them into production quickly. DevSecOps also provides a bevy of tools to track quality</p>
                    <p>We have a number of Continuous Integration (CI) pipelines for various software programming languages looking to enable various assurance activities on our software. We look to automate new requirements into existing pipelines to ensure all customers can benefit from the enhancements. We have automated issue tracking, release management, automated testing and code analysis activities for various development stacks and languages.</p>
                    <p>We have developed various Continuous Deployment (CD) pipelines, we have used Puppet and Ansible to deploy software to physical servers and deployed packages to serverless platforms (e.g. AWS Lambda). While we can provide full automated Ci/CD pipelines we can also create gated processes to allow for assurance review.</p>
                    <p>Pallas Systems collects metrics from all CI/CD pipelines, this information is used to inform development of the software. Allowing us to focus on issues appropriate for the software development approach.</p>
                </Col>
            </Row>
            <Row id="DevSecOps.Container.Description.Row.Col.Text" sm={3} md={4} align="center" className="text-dark">
                <Col id="DevSecOps.Container.Description.Row.Col.Text.Fail_fast" align="center">
                    <AutomationSVG width='140px' height='140px' />
                    <h2>Automation</h2>
                    <p>Your business has processes and rules that need to be followed, we can use automation to ensure your software follows all of them every time</p>
                </Col>
                <Col id="DevSecOps.Container.Description.Row.Col.Text.Kanban" align="center">
                    <CiSVG width='140px' height='140px' />
                    <h2>Continuous Integration</h2>
                    <p>We can integrate CI pipelines to ensure code quality, to stop breaking changes and track technical debt</p>
                </Col>
                <Col id="DevSecOps.Container.Description.Row.Col.Text.MVP" align="center">
                    <CdSVG width='140px' height='140px' />
                    <h2>Continuous Deployment</h2>
                    <p>We will automate your deployments to reduce the time from merging a change to getting it into production</p>
                </Col>
                <Col id="DevSecOps.Container.Description.Row.Col.Text.Scrum" align="center">
                    <IaCSVG width='140px' height='140px' />
                    <h2>Infrastructure As Code</h2>
                    <p>We will define your infrastructure through code which allows your design to be audited for security and ensures your production environment can be recreated as needed</p>
                </Col>
                <Col id="DevSecOps.Container.Description.Row.Col.Text.Scrum" align="center">
                    <SupportSVG width='140px' height='140px' />
                    <h2>Testing</h2>
                    <p>We use a mixture of unit, integration and system testing to ensure software meets your use cases</p>
                </Col>
                <Col id="DevSecOps.Container.Description.Row.Col.Text.Scrum" align="center">
                    <TestingSVG width='140px' height='140px' />
                    <h2>Support</h2>
                    <p>No matter where your software is hosted, we can provide support to ensure high uptime of your production environment</p>
                </Col>
            </Row>
        </Container>
    );
}

export default DevSecOpsServicePage;