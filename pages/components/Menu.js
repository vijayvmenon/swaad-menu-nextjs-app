import React from 'react'
import Image from 'next/image'
import styles from './Menu.module.css'

const Menu = ({ items }) => {
  return (
    <div className={styles.sectionCenter}>
      {items.map((menuItem) => {
        const {
          _id,
          malayalam_text,
          english_text,
          image_url,
          additional_notes,
          price_array
        } = menuItem
        return (
          <article key={_id} className={styles.menuItem}>
            <Image
              src={image_url} // Route of the image file
              height={175} // Desired size with correct aspect ratio
              width={200} // Desired size with correct aspect ratio
              alt={english_text}
              className={styles.photo}
            />
            <div className={styles.itemInfo}>
              <header>
                <h4>{malayalam_text}</h4>
                <h5>{english_text}</h5>
                {price_array.map((val, index) => (
                  <div key={index}>
                    <h4>{val.quantity_unit}</h4>
                    <h4 key={index} className={styles.price}>
                      ${val.price}
                    </h4>
                  </div>
                ))}
              </header>
              <p className={styles.itemText}>{additional_notes}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
