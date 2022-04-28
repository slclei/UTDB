import {
    Checkbox,
    FormGroup,
    FormControlLabel,
    List,
    ListItem,
    Paper,
  } from "@mui/material";
  import s from "./LayerControl.module.css";
  
  export const LayerControl = ({ layers, onToggle }:{layers: any, onToggle: any}) => {
    return (
      <Paper className={s.layerControlRoot}>
        <List>
          <FormGroup>
            {layers.map((layer: any) => (
              <ListItem key={layer.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={layer?.layout?.visibility === "visible"}
                      onChange={(event: { target: { checked: any; }; }) =>
                        onToggle(layer.id, event.target.checked)
                      }
                    />
                  }
                  label={layer.name}
                />
              </ListItem>
            ))}
          </FormGroup>
        </List>
      </Paper>
    );
  };
  