export interface FeaturetteProperty {
    title: string;
    byline: string;
    img: FeaturetteImageProperty;
    description: string[];
}

export interface FeaturetteImageProperty {
    alt: string;
    src: string;
}

export interface FeaturetteItems {
    items: FeaturetteProperty[];
}