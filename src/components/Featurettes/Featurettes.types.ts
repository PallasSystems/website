import { ImageProperty } from '../Common/index';


export interface FeaturetteProperty {
    title: string;
    byline: string;
    img: ImageProperty;
    description: string[];
}

export interface FeaturetteItems {
    items: FeaturetteProperty[];
}