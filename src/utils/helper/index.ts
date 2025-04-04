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
