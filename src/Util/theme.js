import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

function theme() {
	const theme = createTheme({
		palette: {
			primary: {
				main: purple[500]
			},
			secondary: {
				main: green[500]
			}
		}
	});

	return theme;
}

export default theme;
