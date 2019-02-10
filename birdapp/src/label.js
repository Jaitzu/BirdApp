import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends React.Component {
    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-label-placeholder">
                    Age
                </InputLabel>
                <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    input={<Input name="age" id="age-label-placeholder" />}
                    displayEmpty
                    name="age"
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>
        );
    }
}
SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
