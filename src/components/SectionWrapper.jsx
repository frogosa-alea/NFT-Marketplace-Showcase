import React from 'react'

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({
    title,
    description,
    showBtn,
    mockUpImg,
    banner
}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
        <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:3/4`}>
            <div className={`${styles.descDiv}`}>
                <h1 className={`${styles.h1Text}`}>{title}</h1>
                <p className={`${styles.descriptionText}`}>{description}</p>
                { showBtn && (
                    <Button
                        assetUrl={assets.expo}
                        Link=""
                    />
                )
                }
            </div>
            <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
                <img src={mockUpImg} alt="mockup" className={styles.sectionImg}/>
            </div>
        </div>
    </div>
  )
}

export default SectionWrapper