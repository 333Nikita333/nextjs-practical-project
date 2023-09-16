export type LinkType = {
  id: number;
  title: string;
  url: string;
};
export type CategoryDataItemType = {
  id: number;
  title: string;
  desc: string;
  image: string;
};
export type CategoryDataItemsType = {
  [key: string]: CategoryDataItemType[];
};
