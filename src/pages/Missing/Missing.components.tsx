import React, { FC } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { PallasPageWrapper, PallasSVG } from "@pallassystems/website-core";

const MissingPage: FC = () => {
  return (
    <PallasPageWrapper authenticated={true}>
      <Container fluid id={"Missing.Container"} className={"content"}>
        <Row align="center" id={"Missing.Container.ImageRow"}>
          <Col
            className={"text-dark"}
            id={"Missing.Container.ImageRow.Coloumn"}
          >
            <PallasSVG id="Missing.Container.ImageRow.Coloumn.Image" />
          </Col>
        </Row>
        <Row align={"center"} id={"Missing.Container.TextRow"}>
          <Col className={"text-dark"} id={"Missing.Container.TextRow.Coloumn"}>
            <h1 id={"Missing.Container.TextRow.Coloumn.Text"}>Missing Page</h1>
          </Col>
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { MissingPage };
