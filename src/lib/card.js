import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        marginTop: '20px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
}))

export default function DisplayCard(props) {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    {props.label && <Typography variant="subtitle2">
                        {props.label}
                    </Typography>}
                    {props.children}
                </CardContent>
            </div>
        </Card>
    );
}