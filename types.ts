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
  _id: number;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
};
export type ErrorType = {
  message: string;
};
