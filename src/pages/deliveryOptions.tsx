import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

export default function DeliveryOptions() {
  const [state, setState] = React.useState({
    PnOmbud: false,
    DhlOmbud: false,
    PnHem: false,
    DhlExpress: false,
  });

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { PnOmbud, DhlOmbud, PnHem, DhlExpress } = state;
  const error =
    [PnOmbud, DhlOmbud, PnHem, DhlExpress].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={PnOmbud}
                onChange={handleChange}
                name="PnOmbud"
              />
            }
            label="Postnord Ombud - Fri frakt!"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={DhlOmbud}
                onChange={handleChange}
                name="DhlOmbud"
              />
            }
            label="Dhl Ombud - 29:-"
          />
          <FormControlLabel
            control={
              <Checkbox checked={PnHem} onChange={handleChange} name="PnHem" />
            }
            label="Postnord Hemleverans dag/kväll - 49:-"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={DhlExpress}
                onChange={handleChange}
                name="DhlExpress"
              />
            }
            label="DHL express hemleverans inom 24h - 100:-"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
