import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { range } from 'ramda'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    endTimeSelect: {
        marginLeft: '10px'
    }
}))

const ChooseTime = (props) => {
    const classes = useStyles()

    return (
        <>
            <TextField
                select
                value={props.hour}
                onChange={props.onAtHourChange}
                SelectProps={{
                    disabled: props.disabled,
                    native: true,
                }}
                margin="none"
            >
                {range(0, 24).map(m => <option key={m} id={m}>{m.toString().length < 2 ? `0${m}` : m}</option>)}
            </TextField>
            <TextField
                select
                value={props.minute}
                onChange={props.onAtMinuteChange}
                className={classes.endTimeSelect}
                SelectProps={{
                    disabled: props.disabled,
                    native: true,
                }}
                margin="none"
            >
                {range(0, 60).map(m => <option key={m} id={m}>{m.toString().length < 2 ? `0${m}` : m}</option>)}
            </TextField>
        </>
    )
}

export default ChooseTime
