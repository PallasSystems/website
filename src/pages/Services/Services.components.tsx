import React, { FC, useMemo } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Services Properties
import { PallasPageWrapper } from "@pallassystems/website-core";
import {
  ServicePageProperties,
  ServiceDetailProperties,
} from "./Services.types";
import { ServiceBulletPointsSection } from "./bulletpoint/bulletpoint.components";

const ServicesPage: FC<ServicePageProperties> = ({
  footerProps,
  serviceProps,
  navBarProps,
}) => {

  const title = useMemo(() => { return serviceProps.title}, [serviceProps.title]);
  const link = useMemo(() => { return serviceProps.link}, [serviceProps.link]);
  const description = useMemo(() => { return JSON.parse(JSON.stringify(serviceProps.description))}, [serviceProps.description]);
  const img = useMemo(() => { return serviceProps.img}, [serviceProps.img]);
  const items = useMemo(() => { return JSON.parse(JSON.stringify(serviceProps.items)) }, [serviceProps.items]);

  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
      <Container fluid id={ "Service.Container." + serviceProps.title } className={"content"}>
        { undefined === serviceProps.img || null === serviceProps.img ? 
          <ServicesDetailWithOutImageSection title={title} link={link} description={description} />
          : 
          <ServicesDetailWithImageSection title={title} link={link} description={description} img={img} />
        }
        <ServiceBulletPointsSection title={title} link={link} description={description} items={items}/>
      </Container>
    </PallasPageWrapper>
  );
};

const ServicesDetailWithImageSection: FC<ServiceDetailProperties> = ({ title, description, img }) => {

  return (
    <Row className={"content-row"}>
      <Col id="Service.Container.Row.Description.title.Img"
           sm={12}
           md={4}
           lg={3}
           xl={3}
           xxl={3}
           className="float-start pt-4 pb-2 px-2"
      >
        <img {...img} />
      </Col>
      <Col id="Service.Container.Description.Row.Col.Text"
           sm={12}
           md={8}
           lg={9}
           xl={9}
           xxl={9}
      >
        <h2 id="Service.Container.Row.Description.title">{title}</h2>
        {description.map((text: string) => (
          <p key={"Service.Container.Row.Description.p." + text} className="lead">
            {text}
          </p>
        ))}
      </Col>
    </Row>
  );

};

const ServicesDetailWithOutImageSection: FC<ServiceDetailProperties> = ({ title, description }) => {

  return (<Row className={"content-row"}>
    <h2 id="Service.Container.Row.Description.title">
      {title}
    </h2>
    {description.map((text: string) => (
          <p key={"Service.Container.Row.Description.p." + text}
             className="lead">
            {text}
          </p>
        ))}
  </Row>);

};

export { ServicesPage };
