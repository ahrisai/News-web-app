import React,{useState} from 'react'
import sliderStyles from './Slider.module.css'
import Slider from 'react-slick'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import NewsBanner from '../NewsBanner/NewsBanner';

interface ArrowsProps{
    className?:string,
    style?:object,
    onClick?:React.MouseEventHandler<HTMLDivElement>
}

function SampleNextArrow(props:ArrowsProps) {
    const {  onClick } = props;
    return (
      <div
        className={sliderStyles.nextArrow}
        
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:ArrowsProps) {
    const { onClick } = props;

    return (
      <div
        className={sliderStyles.prevArrow}
                
        onClick={onClick}
      />
    );
  }



const SliderBanner = () => {

  const news= useSelector((state:RootState)=>state.newsReducer.news)
const [currentSlide, setCurrentSlide] = useState<number>(0)

    const settings = {
      
      infinite: true,
      centerMode: true,
      speed: 300,
      autoplaySpeed: 3000,
      autoplay: true,
      slidesToShow: 3,
      pauseOnHover: true,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow:<SamplePrevArrow />,
      nextArrow:<SampleNextArrow />,
      afterChange: (current:number) => {
        setCurrentSlide(current);
      },
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 7,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

      };
  return (
      
        <Slider {...settings} className={sliderStyles.Slider}>
          {news.map((item,index)=><NewsBanner key={item.id} isCurrentSlide={index===currentSlide} newsItem={item}/>)
          }
        </Slider>

      )
}

export default SliderBanner