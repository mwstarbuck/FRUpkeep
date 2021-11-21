import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 225,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Selector = (props) => {
  const classes = useStyles();
  const [item, setItem] = React.useState('');
  // const [options] = React.useState(props.options);
  const { options, func, id } = props;

  const handleChange = (event) => {
    setItem(event.target.value);
    if (func) {
      if (isNaN(id))
        func(event.target.value)
      else
        func(id, event.target.value)
    }
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="simple-select-label">{props.label}</InputLabel>
      <Select
        key={id}
        labelId="demo-simple-select-label"
        id={id ? id.toString() : null}
        value={item}
        onChange={handleChange}
      >
        {
          options.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}
export default Selector;