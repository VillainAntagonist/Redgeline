import React, {useState} from 'react';
import cl from './leftside.module.css'

const LeftSide = () => {
    const photos = [
        {
            id: 1,
            src: 'assets/1.jpeg'
        },
        {
            id: 2,
            src: 'assets/2.jpeg'
        },
        {
            id: 3,
            src: 'assets/3.jpeg'
        },
        {
            id: 4,
            src: 'assets/4.jpeg'
        }

    ]

    const [currentPhoto, setCurrentPhoto] = useState(0)
    const handleClick = (way) => {
        const quantityOfPhotos = photos.length
        way === 'left' ? setCurrentPhoto(currentPhoto > 0 ? currentPhoto - 1 : quantityOfPhotos - 1) :
            setCurrentPhoto(currentPhoto < quantityOfPhotos - 1 ? currentPhoto + 1 : 0)
    }
    return (
        <section className={cl.leftSide}>
            <img className={cl.currentPhoto} src={photos[currentPhoto].src}/>
            <div className={cl.gallery}>
                <img className={`${cl.arrow} ${cl.left}`}
                     src='assets/Arrow.svg'
                     onClick={()=>handleClick('left')}
                />
                {photos.map((photo) => (
                    <img className={`${cl.photo} ${(photo.id===currentPhoto+1) && cl.active}`}
                         src={photo.src}
                         onClick={()=>setCurrentPhoto(photo.id-1)}
                         key={photo.id}
                    />
                ))}
                <img className={cl.arrow}
                     src='assets/Arrow.svg'
                    onClick={handleClick}
                />
            </div>

        </section>
    );
};

export default LeftSide;
