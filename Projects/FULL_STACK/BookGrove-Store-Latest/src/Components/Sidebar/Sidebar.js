import React, { useState, useEffect, useRef } from "react";
import './Sidebar.css'
import { useProductAvailable } from "../../Context/product-context"
import { useGenre } from "../../Context/genre-context";

function Sidebar() {
  const {
  dispatchSortedProductsList,
  productFilterOptions,
  dispatchProductFilterOptions
  } = useProductAvailable()

  const {
    fictionCategoryCheckbox,
    setFictionCategoryCheckbox,
    thrillerCategoryCheckbox, 
    setThrillerCategoryCheckbox,
    techCategoryCheckbox, 
    setTechCategoryCheckbox,
    philosophyCategoryCheckbox, 
    setPhilosophyCategoryCheckbox,
    romanceCategoryCheckbox, 
    setRomanceCategoryCheckbox,
    mangaCategoryCheckbox, 
    setMangaCategoryCheckbox, 
  } = useGenre()

  const ratingRadioBtnRef = useRef(null)

  useEffect(()=>{
    dispatchSortedProductsList({type:"UPDATE_LIST_AS_PER_FILTERS",payload:productFilterOptions})
  },[productFilterOptions, dispatchSortedProductsList])

  function clearFilters()
  {
    setFictionCategoryCheckbox(true)
    setThrillerCategoryCheckbox(true)
    setTechCategoryCheckbox(true)
    setPhilosophyCategoryCheckbox(true)
    setRomanceCategoryCheckbox(true)
    setMangaCategoryCheckbox(true)
    dispatchProductFilterOptions({type:"RESET_DEFAULT_FILTERS"})
  }

  return (
    <aside className="product-page-sidebar">
      <div className="filter-clear-options">
        <p className="sidebar-filter-option">Filters</p>
        <p onClick={clearFilters}className="sidebar-clear-option text-underline">Clear</p>
      </div>

      <div className="product-category">
        <p>Category</p>
        <div className="checkbox-item">
          <input
            onChange={() =>{ setFictionCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_FICTION_FILTER"}) }}
            id="fiction-checkbox"
            type="checkbox"
            checked={fictionCategoryCheckbox}
          />
          <label htmlFor="fiction-checkbox">Fiction</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setThrillerCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_THRILLER_FILTER"}) } }
            id="thriller-checkbox"
            type="checkbox"
            checked={thrillerCategoryCheckbox}
          />
          <label htmlFor="thriller-checkbox">Thriller</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setTechCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_TECH_FILTER"}) } }
            id="tech-checkbox"
            type="checkbox"
            checked={techCategoryCheckbox}
          />
          <label htmlFor="tech-checkbox">Tech</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setPhilosophyCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_PHILOSOPHY_FILTER"}) }}
            id="philosophy-checkbox"
            type="checkbox"
            checked={philosophyCategoryCheckbox}
          />
          <label htmlFor="philosophy-checkbox">Philosophy</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
            id="romance-checkbox"
            type="checkbox"
            checked={romanceCategoryCheckbox}
          />
          <label htmlFor="romance-checkbox">Romance</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setMangaCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_MANGA_FILTER"}) } }
            id="manga-checkbox"
            type="checkbox"
            checked={mangaCategoryCheckbox}
          />
          <label htmlFor="manga-checkbox">Manga</label>
        </div>
      </div>

    </aside>
  );
}

export { Sidebar };
