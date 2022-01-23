import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import './SwitchColor.scss'

const SwitchColor = ({color, chooseColor}) => {

  return (
    <>
      <FormControl className="SwitchColor">
        <InputLabel>Color</InputLabel>
        <Select
          value={color}
          label="Color"
          onChange={chooseColor}
        >
          <MenuItem value={color} >
            <div className="SwitchColor__box SwitchColor__box_main"> </div>
          </MenuItem>
          <MenuItem value="#75c8cc">
            <div className="SwitchColor__box SwitchColor__box_green"> </div>
          </MenuItem>
          <MenuItem value="#ffb4bb">
            <div className="SwitchColor__box SwitchColor__box_pink"> </div>
          </MenuItem>
          <MenuItem value="#baffc9">
            <div className="SwitchColor__box SwitchColor__box_green-light"> </div>
          </MenuItem>
          <MenuItem value="#bae1ff">
            <div className="SwitchColor__box SwitchColor__box_blue"> </div>
          </MenuItem>
          <MenuItem value="#ffe0ba">
            <div className="SwitchColor__box SwitchColor__box_orange"> </div>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default SwitchColor