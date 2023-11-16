import { useState } from 'react';
import filterBarStyles from './FilterBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { removeCategory,addCategory, ActionCategory } from '../../redux/newsSlice';
import { useAppDispatch } from '../../redux';
const FilterBar = () => {
  const categories = useSelector((state: RootState) => state.newsReducer.categories);
  const currentCategories = useSelector((state:RootState)=>state.newsReducer.currentCategories)
  const dispatch =useDispatch()


  

  return (
    <div className={filterBarStyles.FilterBar}>
      <FormControl className={filterBarStyles.formControl} variant="filled">
        <InputLabel >Categories</InputLabel>
        <Select
          value={currentCategories}
          label="Categories"
          multiple={true}
          onChange={(e) => {
            dispatch(addCategory({categories:e.target.value as string[]}));
          }}
        >
          <MenuItem selected value={'All'}>All</MenuItem>
          {categories.map((categorie) => (
            <MenuItem key={categorie} value={categorie}>
              {categorie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={filterBarStyles.categoryList}>
            {currentCategories.map(category=>category!=='All'&&
            <div key={category} className={filterBarStyles.categoryContainer}>
                          <div  className={filterBarStyles.category} onClick={()=>dispatch(removeCategory({categories:[],category:category}))}>{category}</div>

            </div>

            )}
            </div>
    </div>
  );
};

export default FilterBar;
