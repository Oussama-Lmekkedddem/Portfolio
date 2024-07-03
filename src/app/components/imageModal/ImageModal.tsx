import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import style from '@/app/components/imageModal/ImageModal.module.css';
import { ImageModalProps } from "@/app/types"

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentImageIndex, images.length, onClose]);

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className={style.modalOverlay} onClick={onClose}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.navButton} onClick={handlePrev}>
                    <FaArrowLeft/>
                </button>
                <img src={images[currentImageIndex].src} alt="" className={style.modalImage}/>
                <button className={style.navButton} onClick={handleNext}>
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
