import { ImageCtaType } from "../../types/contentTypes";

export const createSlug = (title: string, id: number): string => {
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
  return `${slug}-${id}`;
};

export const getIdFromSlug = (slug: string): number => {
  const parts = slug.split("-");
  return parseInt(parts[parts.length - 1], 10);
};

export const getLimitedImages = (
  ctaImages: ImageCtaType[],
  aspectRatio: "31" | "21" | "11",
  numImages?: number
): ImageCtaType[] => {
  const filteredImages = ctaImages.filter(
    (image) => image.aspectRatio === aspectRatio
  );
  return numImages ? filteredImages.slice(0, numImages) : filteredImages;
};
