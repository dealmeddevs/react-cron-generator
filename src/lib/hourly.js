import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/styles'
import StartTime from './chooseTime'
import Card from './card'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    secondaryPaper: {
        padding: theme.spacing(3, 2),
        marginTop: '20px'
    },
    radioBtn: {
        marginTop: '20px'
    },
    endTimeSelect: {
        marginLeft: '10px'
    }
}))

const Hourly = (props) => {
    const [value, setValue] = useState(props.value)
    const [every, setEvery] = useState(props.value)

    useEffect(() => {
        setValue(props.value)

    }, [props.value])

    useEffect(() => {
        const value = props.value
        if (value[2].split('/')[1] || value[2] === '*')
            setEvery(true)
    }, [])

    const onHourChange = (e) => {
        if (every && ((e.target.value > 0 && e.target.value < 24) || e.target.value === '')) {
            let val = ['0', '0', '*', '*', '*', '?', '*'];
            if (e.target.value === '') {
                val[2] = '';
            } else {
                val[2] = `0/${e.target.value}`;
            }
            val[3] = '1/1';
            props.onChange(val)
        }
    }
    const onAtHourChange = (e) => {
        let val = ['0', value[1], '*', '*', '*', '?', '*']
        val[2] = `${e.target.value}`;
        val[3] = '1/1'
        props.onChange(val)
    }
    const onAtMinuteChange = (e) => {
        let val = ['0', '*', value[2], '*', '*', '?', '*']
        val[1] = `${e.target.value}`;
        val[3] = '1/1'
        props.onChange(val)
    }

    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <div>
                    <Radio
                        className={classes.radioBtn}
                        onClick={(e) => { setEvery(true); props.onChange(['0', '0', '0/1', '1/1', '*', '?', '*']) }}
                        checked={every ? true : false}
                        inputProps={{ 'aria-label': 'DailyRadio' }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Every hour(s)"
                        value={value[2].split('/')[1] ? value[2].split('/')[1] : ''}
                        onChange={onHourChange}
                        type="number"
                        InputLabelProps={{
                            disabled: every ? false : true,
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
            </Paper>
            <Card label="Every hour starting at">
                <Radio
                    onClick={(e) => { setEvery(false); props.onChange() }}
                    checked={every ? false : true}
                />
                <StartTime disabled={every} hour={value[2]} minute={value[1]} onAtMinuteChange={onAtMinuteChange} onAtHourChange={onAtHourChange} />
            </Card>
        </div>
    )
}

export default Hourly
