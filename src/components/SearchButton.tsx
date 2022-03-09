// @ts-nocheck

// FOLLOW ME CONNER
//OKAY

// SO HERE IS OUR SEARCH BUTTON, WE WANT IT TO LINK UP WITH THE HEADER.TSX INPUT FIELD. THX
import { Button } from "@mui/material";
import { CSSProperties } from "react";

function SearchButton(searchButtonProps: any) {
  return (
    <div>
      <Button
        style={StyledButton}
        variant="contained"
        onClick={searchButtonProps.handleClick}
      >
        Search
      </Button>
    </div>
  );
}
const StyledButton: CSSProperties = {
  background: "rgb(32, 129, 226)",
  margin: "1rem",
  fontSize: ".9rem",
};
export default SearchButton;
