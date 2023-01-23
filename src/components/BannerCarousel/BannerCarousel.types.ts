/**
 * @typedef {object} BannerCarouselItemProperty
 * @property {String} BannerCarouselItemProperty.title - The repository name
 * @property {String} BannerCarouselItemProperty.description - The Type, BitBucket, Git, Github, GitLab, etc..
 */
export interface BannerCarouselItemProperty {
    title: string;
    description: string;
}

/**
 * @typedef {object} BannerCarouselItems
 * @property {String} BannerCarouselItems.title - The repository name
 * @property {String} BannerCarouselItems.description - The Type, BitBucket, Git, Github, GitLab, etc..
 */
export interface BannerCarouselItems {
    items: BannerCarouselItemProperty[];
}