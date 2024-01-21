import { ReactNode } from "react";
import { ImageProperty } from "@pallassystems/website-core";

export interface FeaturetteProperty {
  title: string;
  byline: string;
  img?: ImageProperty;
  imgFn?: () => ReactNode;
  description: string[];
}
