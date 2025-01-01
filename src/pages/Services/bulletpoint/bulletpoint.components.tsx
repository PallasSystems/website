import React, { FC, useMemo } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";

// Services Properties
import { ServiceDetailProperties } from "../Services.types";
import { RetrieveSVG } from "./bulletpoint.utils";
import { calcNumSectionsForMed, GetServiceDetailThumbnail } from "./bulletpoint.util";

/**
 * Used to generate the bullet point
 * @param param0 
 * @returns 
 */
export const ServiceBulletPointsSection: FC<ServiceDetailProperties> = ({ items }) => {
  const duplicate = JSON.parse(JSON.stringify(items));
  return(
    <Row sm={2} md={calcNumSectionsForMed(duplicate)} align="center" >
      {undefined === duplicate || null === duplicate ? null : 
        duplicate.map((section: ServiceDetailProperties) => {
          return (
            <ServiceBulletPointSection key={"Service.Container.Section.Bullet.Point." + section.title + "." + section.link} {...section} />
          );
        })
      }
    </Row>
  );
};

/**
 * 
 * @param param0 
 * @returns 
 */
export const ServiceBulletPointSection: FC<ServiceDetailProperties> = ({
  title,
  img,
  link,
  description,
  thumbnail,
}) => {

  const detail: ServiceDetailProperties = useMemo(() => { 
    return GetServiceDetailThumbnail(title, link, description, img, thumbnail); 
  }, [title, link, img, description, thumbnail]);

  return (
    <Col id={"Service.Container.Section.Bullet.Point.Col." + detail.title + "." + detail.link} align="center">
      <LinkContainer
        to={undefined === detail.link || null === detail.link ? "" : detail.link}
        key={"Service.Container.Section.Bullet.Point.Col." + detail.title + "." + detail.link + ".col.linkContainer"}
      >
        <a
          key={"Service.Container.Section.Bullet.Point.Col.a." + detail.title + "." + detail.link}
          href={detail.link}
          className="text-dark"
        >
          { RetrieveSVG(detail.title, detail.img) }
          
          <h2>{detail.title}</h2>
          {undefined === detail.description || null === detail.description
            ? null
            : detail.description.map((text: string) => (
                <p key={
                    "Service.Container.Section.Bullet.Point.Col.a." +
                    detail.title + "." + detail.link +
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