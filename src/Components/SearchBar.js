import {React, useState} from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";


const SearchBar = ({placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([])

    const handleFilter =(event)=>{
        const searchWord = event.target.value
        const newFilter = data.filter((item)=>{
            return item.title.toLowerCase().includes(searchWord)
        })

        if (searchWord === ""){
            setFilteredData([])
        } else {
           setFilteredData(newFilter) 
        }
        
    }
    return (
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder}
          onChange={handleFilter} />
          <div className="searchIcon">
            {filteredData.length === 0? <SearchIcon />: <CloseIcon/> }
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
              {/* {filteredData.slice(0, 15).map((obj, key) reduce search to 15 */}
            {filteredData.map((obj, key) => {
              return (
                <a
                  className="dataItem"
                  href={obj.link}
                //   href="#"
                  target="_blank"
                //   rel="nofollow"
                  rel="noreferrer"
                >
                  <p>{obj.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
}

export default SearchBar
