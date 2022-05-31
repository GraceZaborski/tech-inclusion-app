import { TextField, Button } from "@mui/material";

const SearchBox = ({setSearched}) => {

  const setSearch = (result) => {
sessionStorage.setItem("searched", result);
setSearched(result)
  }

  return (
    <div style={{padding: "40px"}}>
    <div style={{display:"flex", "align-items": "center", "justify-content": "center"}}>
      <TextField variant="outlined" style={{"width":"600px"}} inputProps={{style: {fontSize: 25}}}/>
      <Button class="button" variant="contained" onClick={() => setSearch(true)}>
        Search
      </Button>
    </div>
    </div>
  );
};

export default SearchBox;
