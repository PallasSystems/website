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
import { RetrieveSVG } from "./Services.utils";

function calcNumSectionsForMed(sections?: ServiceDetailProperties[]) {
  let result = 12;

  if (undefined !== sections && null !== sections) {
    if (sections.length > 4) {
      result = 3;
    } else if (sections.length > 3) {
      result = 2;
    }
  }

  return result;
}

const ServiceBulletPointSection: FC<ServiceDetailProperties> = ({
  title,
  img,
  link,
  description,
  thumbnail,
}) => {
  const detail = {
    title: title,
    link: link,
    description: description,
    img: img,
  };

  const values =
    undefined === thumbnail || null == thumbnail ? detail : thumbnail;

  return (
    <Col id={"Service.Container.Section.Col." + values.title} align="center">
      <LinkContainer
        to={undefined === link || null === link ? "" : link}
        key={title + ".col.linkContainer"}
      >
        <a
          key={"Service.Container.Section.Col.a." + values.title}
          href={link}
          className="text-dark"
        >
          {RetrieveSVG(values.title, values.img)}
          <h2>{values.title}</h2>
          {undefined === values.description || null === values.description
            ? null
            : values.description.map((text: string) => (
                <p
                  key={
                    "Service.Container.Section.Col.a." +
                    values.title +
                    ".p." +
                    text
                  }
                >
                  {text}
                </p>
              ))}
        </a>
      </LinkContainer>
    </Col>
  );
};

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
