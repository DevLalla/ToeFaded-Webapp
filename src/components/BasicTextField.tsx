import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";

export const BasicTextField = withStyles({
	root: {
		"& label": {
			color: "white",
		},
		"& label.Mui-focused": {
			color: "white",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "white",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "white",
			},
			"&:hover fieldset": {
				borderColor: "white",
			},
			"&.Mui-focused fieldset": {
				borderColor: "white",
			},
		},
	},
})(TextField);
