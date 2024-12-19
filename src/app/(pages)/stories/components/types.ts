import { StaticImageData } from "next/image";

export interface SlideItem {
  id: number;
  title: string;
  images: StaticImageData[] | string[];
}
