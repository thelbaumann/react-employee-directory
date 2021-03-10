import React from 'react';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ViewButtons(onChildClick) {
  const [view, setView] = React.useState('card');

  const handleChange = (event, nextView) => {
    setView(nextView);
    onChildClick(nextView);
  };

  return (
    <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
      <ToggleButton value="table" aria-label="table">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="car" aria-label="car">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}