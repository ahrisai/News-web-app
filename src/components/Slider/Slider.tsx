import React,{useState,useEffect} from 'react'
import sliderStyles from './Slider.module.css'
import Slider from 'react-slick'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux';
import NewsBanner from '../NewsBanner/NewsBanner';
import { fetchLatestNews } from '../../redux/newsSlice';

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

  const latestNews= useSelector((state:RootState)=>state.newsReducer.latestNews)
  const status= useSelector((state:RootState)=>state.newsReducer.latestNewsStatus)
  const dispatch=useAppDispatch()
  const [currentSlide, setCurrentSlide] = useState<number>(0)
console.log(status)
  useEffect(() => {

    dispatch(fetchLatestNews())
  
  }, [])
  

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
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
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
      status==='pending'
      ?<Slider {...settings} className={sliderStyles.Slider}>
        <NewsBanner></NewsBanner>
        <NewsBanner></NewsBanner>
        <NewsBanner></NewsBanner>
      </Slider>

      :
        <Slider {...settings} className={sliderStyles.Slider}>
          {latestNews.map((item,index)=><NewsBanner key={item.id} isCurrentSlide={index===currentSlide} newsItem={item}/>)
          }
        </Slider>

      )
}

export default SliderBanner