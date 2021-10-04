import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={post.selectedFile}
				title={post.title}
			/>
			<div className={classes.overlay}>
				<Typography variant="h5">{post.title}</Typography>
				<Typography variant="h6">{post.artist}</Typography>
				<Typography variant="body1">{post.year}</Typography>
				<Typography variant="body2">
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>

			<Typography style={{ color: "black", fontFamily: "monospace" }}>
				Posted by: {post.creator}
			</Typography>
			<div className={classes.overlay2}>
				<Button
					style={{ color: "white" }}
					size="small"
					onClick={() => setCurrentId(post._id)}
				>
					<MoreHorizIcon fontSize="default" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag.trim()} `)}
				</Typography>
			</div>
			<CardContent>
				<Typography
					variant="body2"
					color="text-secondary"
					component="p"
				>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					size="small"
					color="black"
					onClick={() => dispatch(likePost(post._id))}
				>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp;
					{post.likeCount}
				</Button>
				<Button
					size="small"
					color="black"
					onClick={() => dispatch(deletePost(post._id))}
				>
					<DeleteIcon fontSize="small" />
					
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
