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