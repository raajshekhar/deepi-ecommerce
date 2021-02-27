import React from 'react';
import Image from 'next/image';
import banner from '../../assests/images/banner-sarees-jewelry.png';
import style from './index.module.scss';

const Banner = () => {
    return (
        <section className={`w-100 ${style.bannerSection}`}>
            <Image src={banner} alt='Sarees Jewelery Banner' layout='intrinsic' width={500} height={500} quality={100} />
        </section>
    )
}

export default Banner;