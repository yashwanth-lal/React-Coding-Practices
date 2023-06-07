import './index.css'

const FiltersGroup = props => {
  //   console.log(categoryOptions)
  const {
    ratingsList,
    categoryOptions,
    categoryChange,
    ratingChange,
    resetFilters,
    searchFilter,
    categorySelected,
  } = props

  const changeText = e => {
    if (e.keyCode === 13) {
      const word = e.target.value
      e.target.value = ''
      searchFilter(word)
    }
  }

  const clickCategory = categoryId => {
    // console.log(categoryId)
    categoryChange(categoryId)
  }

  const clickRating = ratingId => {
    // console.log(categoryId)
    ratingChange(ratingId)
  }

  const resetClick = () => {
    resetFilters()
  }

  return (
    <div className="filters-group-container">
      <input
        placeholder="search"
        onKeyDown={changeText}
        type="search"
        className="searchInput"
      />
      <h1>Category</h1>
      <ul className="categoryUl">
        {categoryOptions.map(eachCat => {
          const selectedCss =
            categorySelected === eachCat.categoryId ? 'catSelected' : null
          return (
            <li
              className={`btn ${selectedCss}`}
              onClick={() => clickCategory(eachCat.categoryId)}
              key={eachCat.categoryId}
            >
              <p>{eachCat.name}</p>
            </li>
          )
        })}
      </ul>
      <h1>Rating</h1>
      <ul className="ratingUl">
        {ratingsList.map(eachRat => (
          <li
            onClick={() => clickRating(eachRat.ratingId)}
            className="ratList"
            key={eachRat.ratingId}
          >
            <img
              className="ratImg"
              src={eachRat.imageUrl}
              alt={`rating ${eachRat.ratingId}`}
            />
            <p className="upPara">& up</p>
          </li>
        ))}
      </ul>
      <button onClick={resetClick} type="button" className="resetBtn">
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
