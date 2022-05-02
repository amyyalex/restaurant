import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { data } from '../../constants';
import './Gallery.css';

const galleryImages = ["/images/gallery01.jpg", "/images/gallery02.jpg", "/images/gallery03.jpg", "/images/gallery04.jpeg", "/images/gallery05.jpg", "/images/gallery06.jpg" ]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return(
  <div className="app__gallery app__bg flex__center" id="gallery">
    <div className="app__gallery-content">
      <SubHeading title="Picture Speaks"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type="button" className="custom__button">View More</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className="app__gallery-images_card flex__center" key={'gallery_image-${index + 1}'}>
            <img src={image} alt="gallery " />
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrow">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')}/>

      </div>
    </div>

  </div>
);
}

export default Gallery;