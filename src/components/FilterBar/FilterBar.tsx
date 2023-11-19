import filterBarStyles from "./FilterBar.module.css";
import {  useSelector } from "react-redux";
import { useAppDispatch } from "../../redux";
import { RootState } from "../../redux";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { addCategory, fetchCategories } from "../../redux/newsSlice";
import SelectedCategoriesList from "../SelectedCategoriesList/SelectedCategoriesList";
import { useEffect } from "react";
const FilterBar = () => {
  const categories = useSelector(
    (state: RootState) => state.newsReducer.categories
  );
  const currentCategories = useSelector(
    (state: RootState) => state.newsReducer.currentCategories
  );

  const status = useSelector((state:RootState)=>state.newsReducer.newsStatus)
  const dispatch = useAppDispatch();
  

 
  useEffect(() => {
    dispatch(fetchCategories());
}, [])

  return (
    <div className={filterBarStyles.FilterBar}>
      <FormControl disabled={status==='pending'} className={filterBarStyles.formControl} variant="filled">
        <InputLabel>Categories</InputLabel>
        <Select
          value={currentCategories}
          label="Categories"
          multiple={true}
          onChange={(e) => {
            dispatch(addCategory({ categories: e.target.value as string[] }));
          }}
        >
          <MenuItem selected value={"All"}>
            All
          </MenuItem>
          {categories.map((categorie) => (
            <MenuItem key={categorie} value={categorie}>
              {categorie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          <SelectedCategoriesList/>
    </div>
  );
};

export default FilterBar;
