import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function DisplayCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Execute At:
                    </Typography>
                    {props.textResult && <Typography variant="subtitle1" color="textSecondary">
                        {props.textResult}
                    </Typography>}
                    {props.cronResult && <Typography variant="subtitle1" color="textSecondary">
                        Cron: {props.cronResult}
                    </Typography>}
                </CardContent>
            </div>
        </Card>
    );
}