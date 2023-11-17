
import listStyles from './SelectedCategoriesList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory } from '../../redux/newsSlice'
import { RootState } from '../../redux'
const SelectedCategoriesList = () => {
    const dispatch=useDispatch()
    const currentCategories=useSelector((state:RootState)=>state.newsReducer.currentCategories)
  return (
    <div className={listStyles.categoryList}>
        {currentCategories.map(
          (category) =>
            category !== "All" && (
              <div key={category} className={listStyles.categoryContainer}>
                <div
                  className={listStyles.category}
                  onClick={() =>
                    dispatch(
                      removeCategory({ categories: [], category: category })
                    )
                  }
                >
                  {category}
                </div>
              </div>
            )
        )}
      </div>
  )
}

export default SelectedCategoriesList