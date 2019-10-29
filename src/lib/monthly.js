import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
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
    }
}))

const Monthly = (props) => {
    const [every, setEvery] = useState()
    const [value, setValue] = useState(props.value)

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    useEffect(() => {
        const { value } = props
        if (value[3] === 'L')
            setEvery("2")
        else if (value[3] === 'LW')
            setEvery("3")
        else if (value[3].startsWith('L'))
            setEvery("4")
        else
            setEvery("2")
    }, [])


    const onDayChange = (e) => {
        if (((parseInt(e.target.value) > 0 && parseInt(e.target.value) <= 31)) || e.target.value === "") {
            let val = ['0', value[1] === '*' ? '0' : value[1], value[2] === '*' ? '0' : value[2], value[3], '1/1', '?', '*'];
            val[3] = `${e.target.value}`;
            props.onChange(val)
        }
    }
    const onLastDayChange = (e) => {
        if (((parseInt(e.target.value) >> 0 && parseInt(e.target.value) <= 31)) || e.target.value === "") {
            let val = ['0', value[1] === '*' ? '0' : value[1], value[2] === '*' ? '0' : value[2], value[3], '1/1', '?', '*'];
            if (e.target.value === '') {
                val[3] = ''
            } else {
                val[3] = `L-${e.target.value}`;
            }
            props.onChange(val)
        }
    }
    const onAtHourChange = (e) => {
        let val = value;
        val[2] = `${e.target.value}`;
        props.onChange(val)
    }
    const onAtMinuteChange = (e) => {
        let val = value;
        val[1] = `${e.target.value}`;
        props.onChange(val)
    }

    const classes = useStyles()
    return (<div className="tab-pane" >
        <Paper className={classes.root}>
            <Radio
                className={classes.radioBtn}
                onChange={(e) => { setEvery(e.target.value); props.onChange(['0', value[1] === '*' ? '0' : value[1], value[2] === '*' ? '0' : value[2], '1', '1/1', '?', '*']) }}
                value="1"
                name="MonthlyRadio"
                checked={every === "1" ? true : false}
                inputProps={{ 'aria-label': 'DailyRadio' }}
            />
            &nbsp;&nbsp;
            <TextField
                id="outlined-number"
                label="Day of every month(s)"
                value={value[3]}
                onChange={onDayChange}
                type="number"
                InputLabelProps={{
                    readOnly: every !== "1",
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
            />
        </Paper>

        <Paper className={classes.secondaryPaper}>
            <FormControlLabel
                value="top"
                control={<Radio
                    onChange={(e) => { setEvery(e.target.value); props.onChange(['0', value[1] === '*' ? '0' : value[1], value[2] === '*' ? '0' : value[2], 'L', '*', '?', '*']) }}
                    value="2"
                    name="DailyRadio"
                    checked={every === "2" ? true : false}
                    inputProps={{ 'aria-label': 'DailyRadio' }}
                />}
                label="Last day of every month"
                labelPlacement="right"
            />
        </Paper>
        <Paper className={classes.secondaryPaper}>
            <FormControlLabel
                value="top"
                control={<Radio
                    onChange={(e) => { setEvery(e.target.value); props.onChange(['0', value[1] === '*' ? '0' : value[1], value[2] === '*' ? '0' : value[2], 'LW', '*', '?', '*']) }}
                    value="3"
                    name="DailyRadio"
                    checked={every === "3" ? true : false}
                    inputProps={{ 'aria-label': 'DailyRadio' }}
                />}
                label="On the last weekday of every month"
                labelPlacement="right"
            />
        </Paper>
        <Paper className={classes.secondaryPaper}>
            <Radio
                className={classes.radioBtn}
                onChange={(e) => { setEvery(e.target.value); props.onChange(['0', value[1] === '*' ? '0' : value[1], value[2] === '*' ? '0' : value[2], `L-${1}`, '*', '?', '*']) }}
                value="4"
                name="MonthlyRadio"
                checked={every === "4" ? true : false}
                inputProps={{ 'aria-label': 'MonthlyRadio' }}
            />
            <TextField
                id="outlined-number"
                label="Day(s) before the end of the month"
                value={value[3].split('-')[1]}
                onChange={onLastDayChange}
                type="number"
                InputLabelProps={{
                    readOnly: every !== "4",
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
            />
            &nbsp;
        </Paper>
        <Card label="Start time">
            <StartTime hour={value[2]} minute={value[1]} onAtMinuteChange={onAtMinuteChange} onAtHourChange={onAtHourChange} />
        </Card>
    </div>)
}

export default Monthly
