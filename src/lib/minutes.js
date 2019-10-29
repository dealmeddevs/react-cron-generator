import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}))

const Minutes = (props) => {
    const [value, setValue] = useState(props.value)

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    const onChange = (e) => {
        if ((e.target.value > 0 && e.target.value < 60) || e.target.value === '') {
            let val = ['0', '*', '*', '*', '*', '?', '*']

            if (e.target.value === '') {
                val[1] = '';
            } else {
                val[1] = `0/${e.target.value}`;
            }

            props.onChange(val)
        }
    }

    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <TextField
                id="outlined-number"
                label="Every minute(s)"
                value={value[1].split('/')[1]} min={1} max={60}
                onChange={e => onChange(e)}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
            />
        </Paper>
    )
}

export default Minutes
