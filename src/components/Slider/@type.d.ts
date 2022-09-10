import { React } from 'react';

export interface SliderItem {
  image: any;
  title: string;
  description: string;
  link?: string;
  bgColor?: string;
}

export interface SliderProps {
  children?: React.ReactNode;
  data: SliderItem[];
}
