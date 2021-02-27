import React from 'react';
import TextThumnail from '../../components/TextThumnail';
import SareeImg from '../../assests/images/saree.png'
import JewelryImg from '../../assests/images/jewelry.png'
import style from './index.module.scss';

const MenuThumbnail = () => {
    const thumbnails = [ { name: 'sarees', link: '/c/sarees', img: SareeImg }, { name: 'jewelry', link: '/c/jewelry', img: JewelryImg } ]
    return (
        <section className={style.menuThubnail}>
            { thumbnails.map(data => <TextThumnail {...data} key={data.name} />) }
        </section>
    )   
}

export default MenuThumbnail;