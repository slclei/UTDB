//JSX.Element for layer control function

import React from 'react';
import {
    Checkbox,
    FormGroup,
    FormControlLabel,
    List,
    ListItem,
    Paper,
  } from "@mui/material";
  import s from "./LayerControl.module.css";
  
  export const LayerControl = ({id, layers, onToggle }:{id:string, layers: any, onToggle: any}) => {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Paper className={s.layerControlRoot} id={id}>
        Layers:
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

  

  