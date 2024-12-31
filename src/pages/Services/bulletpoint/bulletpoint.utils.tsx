import React, { ReactNode } from "react";
import type { ImageProperty } from "@pallassystems/website-core";

import { AutomationSVG, InfrastructureAsCodeSVG } from "../../../components";
import {
    AgileSVG,
    FailFastSVG,
    KanbanSVG,
    MVPSVG,
    ScrumSVG,
  } from "../agile/index";
  import { AnalyticSVG } from "../analytics/index";
  import { AssessSVG, CloudSVG, SupportSVG } from "../cloud/index";
  import { DataEngSVG } from "../dataeng/index";
  import {
    DevSecOpsSVG,
    ContinuousDeploymentSVG,
    ContinuousIntegrationSVG,
    TestingSVG,
  } from "../devsecops/index";

/**
 * 
 * @param title 
 * @param img 
 * @returns 
 */
export const RetrieveSVG = (title: string, img?: ImageProperty): ReactNode => {
    let result;
    if (undefined === img || null === img) {
      console.log("retrieveSVG - No Img Attribute for: " + title);
    } else {
      img.id = title;
  
      switch (title) {
        case "Agile":
          result = <AgileSVG {...img} />;
          break;
        case "Asses":
          result = <AssessSVG {...img} />;
          break;
        case "Automation":
          result = <AutomationSVG {...img} />;
          break;
        case "Cloud":
        case "Cloud Development":
          result = <CloudSVG {...img} />;
          break;
        case "Continuous Deployment":
          result = <ContinuousDeploymentSVG {...img} />;
          break;
        case "Continuous Integration":
          result = <ContinuousIntegrationSVG {...img} />;
          break;
        case "DevSecOps":
          result = <DevSecOpsSVG {...img} />;
          break;
        case "Data Analytics":
          result = <AnalyticSVG {...img} />;
          break;
        case "Data Engineering":
          result = <DataEngSVG {...img} />;
          break;
        case "Fail Fast":
          result = <FailFastSVG {...img} />;
          break;
        case "Infrastructure As Code":
          result = <InfrastructureAsCodeSVG {...img} />;
          break;
        case "Kanban":
          result = <KanbanSVG {...img} />;
          break;
        case "Minimum Viable Product":
          result = <MVPSVG {...img} />;
          break;
        case "Scrum":
          result = <ScrumSVG {...img} />;
          break;
        case "Support":
          result = <SupportSVG {...img} />;
          break;
        case "Testing":
          result = <TestingSVG {...img} />;
          break;
        default:
          console.log("retrieveSVG - Unable to process icon: " + title);
          break;
      }
    }
  
    return result;
  }