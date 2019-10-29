import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red, green, pink, grey } from '@material-ui/core/colors'

export default createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: grey[300],
            },
            elevation1: {
                boxShadow: 0
            }

        }
    },
    palette: {
        primary: blue,
        error: red,
        success: green,
        complete: green,
        incomplete: pink,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    }
});