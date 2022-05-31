import React, { useState } from "react";
import SearchBox from "./SearchBox";

const SearchContainer = ({ onLinkPressed }) => {
  const [search, setSearch] = useState(false);

  const showResults = (result, title) => {
    onLinkPressed(result, title);
  };

  function handleSearch(result) {
setSearch(result)
  }

const searched = sessionStorage.getItem("searched");
console.log(searched)

  return (
    <div style={{"margin-left": "40px"}}>
      <SearchBox onSearch={handleSearch}/>
      {(searched || search) && (
        <>
        <div class="links">
          <p 
            onClick={() => showResults(true, "Find out more about Vanuatu")}>
            Find out more about Vanuatu
</p><br/>
<p
            onClick={() => showResults(true, "Vanuatu- facts and figures")}>
            Vanuatu- facts and figures
</p><br/>
<p
            onClick={() => showResults(true, "Vanuatu- major cities")}>
            Vanuatu- major cities
</p><br/>
</div>
        </>
      )}
    </div>
  );
};

export default SearchContainer;
