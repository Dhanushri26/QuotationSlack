import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const properties = [
  'Casagrand',
  'CasaVilla',
  'Avm Real Estate',
  'SRM Apartments',
];

function getStyles(name, selectedNames, theme) {
  return {
    fontWeight: selectedNames.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function Lands() {
  const theme = useTheme();
  const [selectedProperties, setSelectedProperties] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedProperties(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 200 ,mr:'2rem'}}>
        <Select
          multiple
          displayEmpty
          value={selectedProperties}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em><b>Casagrand</b></em>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ bgcolor: 'white', height: '2rem', padding: '0.2rem' }}
          IconComponent={() => (
            <IconButton sx={{ p: 0 }}>
              <KeyboardArrowDownIcon />
            </IconButton>
          )}
        >
          <MenuItem disabled value="" sx={{ height: '2rem' }}>
            <em>Select a property...</em> 
          </MenuItem>
          {properties.map((property) => (
            <MenuItem
              key={property}
              value={property}
              style={getStyles(property, selectedProperties, theme)}
            >
              {property}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
