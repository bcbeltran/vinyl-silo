import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		color: 'white',
		"& .MuiTextField-root": {
			borderRadius: "5px",
			backgroundColor: "rgb(88,88,88)",
			margin: theme.spacing(1),
		},
	},
	paper: {
		color: "white",
		borderRadius: "5px",
		backgroundColor: "rgb(88,88,88)",
		padding: theme.spacing(2),
	},
	form: {
		color: "white",
		backgroundColor: "rgb(88,88,88)",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		borderRadius: "5px",
	},
	fileInput: {
		color: "white",
		borderRadius: "5px",
		backgroundColor: "rgb(88,88,88)",
		width: "97%",
		margin: "10px 0",
	},
	buttonSubmit: {
		marginBottom: 10,
	},
	textfield: {
		borderRadius: "5px",
		color: "white",
		backgroundColor: "black",
	},
}));
