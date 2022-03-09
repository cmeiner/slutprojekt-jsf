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
