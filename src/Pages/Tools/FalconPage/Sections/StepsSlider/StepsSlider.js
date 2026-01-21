import React, { useState, useEffect, useCallback } from 'react';
import './StepsSlider.css';

// استيراد المكونات والصور مع مراعاة حالة الأحرف (Case Sensitivity)
import LaptopSVG from '../../../../../GlobalAssets/LaptopSVG';
import screen1 from './Screenshot-05.png';
import screen2 from './Screenshot-07.png';
import screen3 from './Screenshot-06.png';

const StepsSlider = () => {
    // هيكل البيانات لدمج الصور مع النصوص التعليمية
    const sliderData = [
        { img: screen1, text: "1. Enter the directory path you wish to secure." },
        { img: screen2, text: "2. Our engine cross-references millions of signatures." },
        { img: screen3, text: "3. Threats are quarantined instantly." }
    ];

    const [index, setIndex] = useState(0);
    const [status, setStatus] = useState('falcon-anim-active');

    const handleSlide = useCallback((nextIdx, dir) => {
        // 1. تفعيل حركة الخروج للصورة الحالية
        setStatus(dir === 1 ? 'falcon-anim-out-left' : 'falcon-anim-out-right');

        setTimeout(() => {
            // 2. تغيير الصورة وتثبيت مكان البداية للصورة الجديدة
            setIndex(nextIdx);
            setStatus(dir === 1 ? 'falcon-anim-in-start-right' : 'falcon-anim-in-start-left');

            // 3. ضمان إدراك المتصفح للموقع الجديد قبل بدء الحركة
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setStatus('falcon-anim-active');
                });
            });
        }, 600); 
    },[]);

    const onNext = useCallback(() => {
        handleSlide((index + 1) % sliderData.length, 1);
    }, [index, sliderData.length, handleSlide]);

    const onPrev = useCallback(() => {
        handleSlide((index - 1 + sliderData.length) % sliderData.length, -1);
    }, [index, sliderData.length, handleSlide]);

    // تبديل تلقائي كل 5 ثوانٍ
    useEffect(() => {
        const auto = setInterval(onNext, 5000);
        return () => clearInterval(auto);
    }, [onNext]);

    return (
        <div className="falcon-slider-container">
            {/* حاوية التعليمات النصية المتحركة */}
            <div className="falcon-slider-instruction-box">
                <p className="falcon-slider-text">
                    {sliderData[index].text}
                </p>
            </div>

            {/* أزرار التحكم والـ Dots */}
            <div className="falcon-slider-navigation">
                <button className="falcon-slider-arrow-button" onClick={onPrev}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" className="falcon-slider-svg-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                <div className="falcon-slider-dots-group">
                    {sliderData.map((_, i) => (
                        <div 
                            key={i} 
                            className={`falcon-slider-dot-item ${i === index ? 'falcon-active' : ''}`}
                            onClick={() => i !== index && handleSlide(i, i > index ? 1 : -1)}
                        />
                    ))}
                </div>

                <button className="falcon-slider-arrow-button" onClick={onNext}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" className="falcon-slider-svg-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>

            {/* هيكل اللابتوب ومنطقة العرض */}
            <div className="falcon-slider-laptop-shell">
                <LaptopSVG className="falcon-slider-frame-img" />
                <div className="falcon-slider-screen-viewport">
                    <img 
                        src={sliderData[index].img} 
                        alt="Falcon Defender Interface" 
                        className={`falcon-slider-content-img ${status}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default StepsSlider;