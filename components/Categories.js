import React, { useState } from 'react'
import styles from './Categories.module.css'
import classNames from 'classnames'
const Categories = ({ categories, filterItems }) => {
  let [currentCategory, setCurrentCategory] = useState(0)

  const handleCategoryClick = (categoryIndex, category) => {
    filterItems(category)
    setCurrentCategory(categoryIndex)
  }

  return (
    <div className={styles.btnContainer}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={
              index === currentCategory
                ? classNames(styles.filterBtn, styles.activeBtn)
                : styles.filterBtn
            }
            key={index}
            style={{}}
            onClick={() => handleCategoryClick(index, category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
