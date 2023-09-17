import './index.css'

import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {searchInput, value, onChangeClear} = props

  const onEnterSearchInput = event => {
    const {enterSearch} = props
    if (event.key === 'Enter') {
      enterSearch()
    }
  }

  const filterButton = () => {
    onChangeClear()
  }
  const ratingView = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, ratingOptionId} = props
      const ratingClassName =
        ratingOptionId === rating.ratingId ? 'rating-styling-button' : null

      const onClickRating = () => {
        changeRating(rating.ratingId)
      }
      return (
        <div>
          <ul className="unorderedList-rating">
            <li
              onClick={onClickRating}
              key={rating.ratingId}
              className={`rating-button ${ratingClassName}`}
            >
              <img
                src={rating.imageUrl}
                alt={`rating ${rating.ratingId}`}
                className="rating-image"
              />
              <p className="up-para">& up</p>
            </li>
          </ul>
        </div>
      )
    })
  }

  const categoryView = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {onchangeCategory, categoryOptionId} = props
      const categoryClassName =
        category.categoryId === categoryOptionId
          ? 'category-styling-button'
          : null

      const onClickCategory = () => {
        onchangeCategory(category.categoryId)
      }

      return (
        <div>
          <ul className="unOrderedList-category">
            <li
              onClick={onClickCategory}
              key={category.name}
              className={`category-button ${categoryClassName}`}
            >
              <p> {category.name} </p>
            </li>
          </ul>
        </div>
      )
    })
  }

  const searchView = () => (
    <div className="search-con">
      <input
        type="search"
        placeholder="Search"
        onChange={searchInput}
        onKeyDown={onEnterSearchInput}
        value={value}
        className="searchInput"
      />
      <BsSearch />
    </div>
  )

  return (
    <div className="filters-group-container">
      <div>{searchView()}</div>
      <h1>Category</h1>
      <div>{categoryView()}</div>
      <h1>Rating</h1>
      <div>{ratingView()}</div>
      <button type="button" onClick={filterButton} className="button-clear">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
