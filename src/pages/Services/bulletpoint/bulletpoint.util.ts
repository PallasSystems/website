import { ImageProperty } from "@pallassystems/website-core";
import { ServiceDetailProperties } from "../Services.types";

/**
 * 
 * @param sections 
 * @returns 
 */
export const calcNumSectionsForMed = (sections?: ServiceDetailProperties[]): number => {
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

/**
 * This will overlay thumbnail values on to the basic service detail to ensure we have a bullet point to construct.
 * @param title Service detail Page title
 * @param link Service detail Page link
 * @param description Service detail Page description
 * @param img Service detail Page image
 * @param thumbnail Service detail Page thumbnail information to use for the bullet point if it exists.
 * @returns the title, link, description and img if supplied and no thumbnail
 */
export const GetServiceDetailThumbnail = (
  title: string,
  link: string,
  description: string[],
  img?: ImageProperty,
  thumbnail?: ServiceDetailProperties): ServiceDetailProperties => {

  // create a basic object based on the detail supplied
  const result: ServiceDetailProperties = {
    title: title && title.length > 0 ? title : '',
    link: link && link.length > 0 ? link : '',
    description: description && description.length > 0 ? description : [],
    img: img ? img : { id: 'empty'},
  }

  // If we have a valid thumbnail we want to overlay it on our result;
  if (undefined !== thumbnail && null !== thumbnail) {
    if (thumbnail.title.length > 0) {
      result.title = thumbnail.title;
    } 

    // If the thumbnail link is different we want to make use.
    if (thumbnail.link.length > 0) {
      result.link = thumbnail.link;
    } 

    // If we have a non empty array we want to overlay it
    if (thumbnail.description.length > 0) {
      result.description = thumbnail.description;
    }

    result.img = OverlayImageProperty(result.img, thumbnail.img);
  }

 return result;
}; 

/**
 * This will overlay thumbnail values on to the basic service detail to ensure we have a bullet point to construct.
 * @param title Service detail Page title
 * @param link Service detail Page link
 * @param description Service detail Page description
 * @param img Service detail Page image
 * @param thumbnail Service detail Page thumbnail information to use for the bullet point if it exists.
 * @returns the title, link, description and img if supplied and no thumbnail
 */
export const OverlayImageProperty = (
  img?: ImageProperty,
  overlay?: ImageProperty): ImageProperty => {

  let result: ImageProperty = { id:"" };
  if (undefined === img || null === img) {
    // if there is no source image but a overlay lets use it.
    if (undefined !== overlay && null !== overlay) {
      result = overlay;
    }
  } else if (undefined === overlay || null === overlay) {
    result = img;
  } else {
    result.alt = overlay.alt && overlay.alt.length < 1 ? overlay.alt : img.alt;
    result.className = overlay.className && overlay.className.length < 1 ? overlay.className : img.className;
    result.height = overlay.height && overlay.height.length < 1 ? overlay.height : img.height;
    result.id = overlay.id && overlay.id.length < 1 ? overlay.id : img.id;
    result.src = overlay.src && overlay.src.length < 1 ? overlay.src : img.src;
    result.width = overlay.width && overlay.width.length < 1 ? overlay.width : img.width;
  }

 return result;
}; 