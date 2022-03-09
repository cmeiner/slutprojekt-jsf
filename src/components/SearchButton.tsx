// @ts-nocheck

import { Button } from "@mui/material";
import { useRef, CSSProperties } from "react";

function SearchButton() {
  const input1 = useRef(null);

  const handleClick = () => {
    input1.current.focus();
  };

  return (
    <div>
      <Button style={StyledButton} variant="contained" onClick={handleClick}>
        Search for NFT
      </Button>
      <input ref={input1} type="text" name="one" id="one" placeholder="one" />
    </div>
  );
}
const StyledButton: CSSProperties = {
  background: "rgb(32, 129, 226)",
  margin: "1rem",
  fontSize: "2rem",
};
export default SearchButton;
