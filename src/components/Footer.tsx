import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Footer() {
  return (
    <div>
      <div style={footerStyle}>
        © Created by FrontFelix, AdaHep and MiMeiner, 2022.
        <Link to="/Admin">
          <Button style={StyledButton} variant="contained" href="">
            ADMIN
          </Button>
        </Link>
      </div>
    </div>
  );
}

const StyledButton: CSSProperties = {
  background: "#2081e2",
  margin: "1rem",
  fontSize: "1rem",
  fontWeight: "bold",
  position: "absolute",
  right: 0,
  top: '0'
};

const footerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "3rem",
  paddingBottom: '1rem',
  position: "relative",
};

export default Footer;
