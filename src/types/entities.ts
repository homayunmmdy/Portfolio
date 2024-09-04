import { IconType } from "react-icons";

export type PostsFrontmatter = {
  title: string;
  description: string;
  date: string;
  categories: string[];
  imgURL: string;
};

export interface PageTitleType {
  titr? :string;
  title : string;
  date?:string;
  categories? : string[];
}

export interface SocialMedia {
  name : string;
  href: string;
  icon: IconType
};

export type PostsCashType = {
  _id: string;
  title: string;
  imgurl: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};