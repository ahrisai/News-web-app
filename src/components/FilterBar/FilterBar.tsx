import filterBarStyles from "./FilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { addCategory } from "../../redux/newsSlice";
import SelectedCategoriesList from "../SelectedCategoriesList/SelectedCategoriesList";
const FilterBar = () => {
  const categories = useSelector(
    (state: RootState) => state.newsReducer.categories
  );
  const currentCategories = useSelector(
    (state: RootState) => state.newsReducer.currentCategories
  );

  const status = useSelector((state:RootState)=>state.newsReducer.newsStatus)
  const dispatch = useDispatch();

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
