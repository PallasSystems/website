import React, { FC } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { LinkContainer } from "react-router-bootstrap";

// Services Properties
import { PallasPageWrapper } from "@pallassystems/website-core";
import {
  ServicePageProperties,
  ServiceDetailProperties,
} from "./Services.types";
import { calcNumSectionsForMed } from "./Services.utils";
import { ServiceBulletPointSection } from "./bulletpoint";

const ServicesPage: FC<ServicePageProperties> = ({
  footerProps,
  serviceProps,
  navBarProps,
}) => {
  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container fluid id={"Service.Container"} className={"content"}>
        {undefined === serviceProps.img || null === serviceProps.img ? (
          <Row className={"content-row"}>
            <h2 id="Service.Container.Row.Description.title">
              {serviceProps.title}
            </h2>
            {undefined === serviceProps.description ||
            null === serviceProps.description
              ? null
              : serviceProps.description.map((text: string) => (
                  <p
                    key={"Service.Container.Row.Description.p." + text}
                    className="lead"
                  >
                    {text}
                  </p>
                ))}
          </Row>
        ) : (
          <Row className={"content-row"}>
            <Col
              id="Service.Container.Row.Description.title.Img"
              sm={12}
              md={4}
              lg={3}
              xl={3}
              xxl={3}
              className="float-start pt-4 pb-2 px-2"
            >
              <img {...serviceProps.img} />
            </Col>
            <Col
              id="Service.Container.Description.Row.Col.Text"
              sm={12}
              md={8}
              lg={9}
              xl={9}
              xxl={9}
            >
              <h2 id="Service.Container.Row.Description.title">
                {serviceProps.title}
              </h2>
              {undefined === serviceProps.description ||
              null === serviceProps.description
                ? null
                : serviceProps.description.map((text: string) => (
                    <p
                      key={"Service.Container.Row.Description.p." + text}
                      className="lead"
                    >
                      {text}
                    </p>
                  ))}
            </Col>
          </Row>
        )}
        <Row
          sm={2}
          md={calcNumSectionsForMed(serviceProps.items)}
          align="center"
        >
          {undefined === serviceProps.items || null == serviceProps.items
            ? null
            : serviceProps.items.map((section: ServiceDetailProperties) => {
                return (
                  <ServiceBulletPointSection key={section.title} {...section} />
                );
              })}
        </Row>
      </Container>
    </PallasPageWrapper>
  );
};

export { ServicesPage };
