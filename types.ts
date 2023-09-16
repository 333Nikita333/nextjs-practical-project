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
export type DarkModeToggleContextType = {
  handleToggle: () => void;
  mode: string;
};
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
