import React, { FC } from "react";

import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";

// Services Properties
import { ServiceDetailProperties } from "../Services.types";
import { RetrieveSVG } from "./bulletpoint.utils";

export const ServiceBulletPointSection: FC<ServiceDetailProperties> = ({
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

  const values = undefined === thumbnail || null == thumbnail ? detail : thumbnail;

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