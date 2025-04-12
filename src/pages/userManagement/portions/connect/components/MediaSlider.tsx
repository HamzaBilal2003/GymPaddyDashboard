import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MediaSliderProps {
  type: 'image' | 'video';
  media: string[];
  onClose: () => void;
}

const MediaSlider: React.FC<MediaSliderProps> = ({ type, media, onClose }) => (
  <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center">
    <button 
      onClick={onClose}
      className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 cursor-pointer"
    >
      <X size={24} />
    </button>
    
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full max-w-4xl relative"
    >
      {media.map((src, index) => (
        <SwiperSlide key={index}>
          {type === 'image' ? (
            <img 
              src={src} 
              alt={`Slide ${index + 1}`}
              className="w-full h-[80vh] object-contain"
            />
          ) : (
            <video 
              src={src}
              controls
              className="w-full h-[80vh] object-contain"
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
    
    <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50">
      <ChevronLeft size={32} />
    </button>
    <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50">
      <ChevronRight size={32} />
    </button>
  </div>
);

export default MediaSlider;