import { StaticImageData } from "next/image";

export interface IBlog {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  date: string;
  tag: string;
}
