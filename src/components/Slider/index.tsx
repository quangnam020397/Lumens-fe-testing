import styles from './styles.module.scss';
import { default as SliderBar } from 'react-slick';

import { SliderProps } from './@type';

function Slider({ data }: SliderProps) {
  const settings = {
    className: styles.slider__list,
    centerMode: true,
    infinite: true,
    centerPadding: '48px',
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };
  return (
    <SliderBar {...settings}>
      {data.map(({ image: Image, ...item }, index) => (
        <div key={index} className={styles.slider__items}>
          <Image style={{ color: item.bgColor || '#A461D8' }} />
          <div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </SliderBar>
  );
}

export default Slider;
