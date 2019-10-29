import React, { useState } from 'react'
import { range } from 'ramda'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
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

const Weekly = (props) => {
    const [value] = useState(props.value)

    const onAtHourChange = (e) => {
        let val = value;
        val[0] = '0';
        val[2] = `${e.target.value}`;
        props.onChange(val)
    }
    const onAtMinuteChange = (e) => {
        let val = value;
        val[0] = '0';
        val[1] = `${e.target.value}`;
        props.onChange(val)
    }

    const onCheck = (e) => {
        let val = value;
        val[0] = '0';
        if (e.target.checked) {
            val[2] = (`${val[2]}`.split('/').length > 1) ? '0' : val[2].toString();
            val[3] = '?';
            val[4] = '*';
            if (val[5] === '*' || val[5] === '?' || val[5] === 'MON-FRI') {
                val[5] = e.target.value;
            } else {
                val[5] = val[5] + '!' + e.target.value;
            }
        } else {
            val[5] = val[5].split('!');
            if (val[5].length > 1) {
                val[5].splice(val[5].indexOf(e.target.value), 1)
                val[5] = val[5].toString().replace(/,/g, '!')
            } else {
                val[5] = '*';
            }
        }

        props.onChange(val)
    }

    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <Grid container justify="space-evenly">
                    <Grid item justify="flex-start">
                        <Checkbox color="primary" type="checkbox" value="MON" onChange={onCheck} checked={(value[5].search('MON') !== -1) ? true : false} />&nbsp;Monday<br />
                        <Checkbox color="primary" type="checkbox" value="WED" onChange={onCheck} checked={value[5].search('WED') !== -1 ? true : false} />&nbsp;Wednesday<br />
                        <Checkbox color="primary" type="checkbox" value="FRI" onChange={onCheck} checked={(value[5].search('FRI') !== -1) ? true : false} />&nbsp;Friday<br />
                        <Checkbox color="primary" type="checkbox" value="SUN" onChange={onCheck} checked={value[5].search('SUN') !== -1 ? true : false} />&nbsp;Sunday
                    </Grid>
                    <Grid item justify="flex-start">
                        <Checkbox color="primary" type="checkbox" value="TUE" onChange={onCheck} checked={value[5].search('TUE') !== -1 ? true : false} />&nbsp;Tuesday<br />
                        <Checkbox color="primary" type="checkbox" value="THU" onChange={onCheck} checked={value[5].search('THU') !== -1 ? true : false} />&nbsp;Thursday<br />
                        <Checkbox color="primary" type="checkbox" value="SAT" onChange={onCheck} checked={value[5].search('SAT') !== -1 ? true : false} />&nbsp;Saturday
                    <br /><br />
                    </Grid>
                </Grid>
            </Paper>
        
            <Card label="Start time">
                <StartTime hour={value[2]} minute={value[1]} onAtMinuteChange={onAtMinuteChange} onAtHourChange={onAtHourChange} />
            </Card>
        </div>)
}

export default Weekly
