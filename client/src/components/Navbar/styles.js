import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 50px",
	},
	heading: {
		color: "rgba(88,88,88, 1)",
		textDecoration: "none",
	},
	image: {
		marginLeft: "15px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
		width: "400px",
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
		width: "400px",
	},
	userName: {
		display: "flex",
		alignItems: "center",
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
	},
	black: {
		color: 'rgb(200,200,200)',
		backgroundColor: 'black',
	},
}));
