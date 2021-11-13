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
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  function Selector(props) {
    const classes = useStyles();
    const [item, setItem] = React.useState('');
    const [options] = props;
  
    const handleChange = (event) => {
      setItem(event.target.value);
    };
    return (
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={item}
            onChange={handleChange}
        >   
        {
            options.map(option => {
                return <MenuItem value={option}>{option}</MenuItem>
            })
        }
        </Select>
    </FormControl>
    )
  }
export default Selector;