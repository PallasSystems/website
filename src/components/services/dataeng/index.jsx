import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { ReactComponent as DataEngSVG } from './dataeng_small.svg';

function DataEngServicePage() {
    return (
        <Container fluid id="DataEng.Container">
            <Col id="DataEng.Container.Description.Row.Col.Img" sm={12} md={12} lg={5} xl={4} xxl={3} className="float-start pt-4 pb-2 px-2" >
                <DataEngSVG width='140px' height='140px' />
            </Col>
            <Row id="DataEng.Container.Row">
                <Col id="DataEng.Container.Description.Row.Col.Text" sm={12} md={12} lg={7} xl={8} xxl={9} >
                    <h1>How Can We Help?</h1>
                    <p>We have experience in dealing with the ever increasing and changing data landscape. We have built Extract Load Transformation platforms in a variety of Apache frameworks from million record per day systems in Apache Camel to processing billions of records per hour using Apache Pig. We are happy to use the framework and architecture that works for you.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default DataEngServicePage;