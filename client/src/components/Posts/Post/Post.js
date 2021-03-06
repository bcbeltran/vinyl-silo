import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	ButtonBase,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deletePost, likePost } from "../../../actions/posts";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const user = JSON.parse(localStorage.getItem("profile"));

	const Likes = () => {
		if (post.likes.length > 0) {
			return post.likes.find(
				(like) =>
					like === (user?.result?.gooogleId || user?.result?._id)
			) ? (
				<>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp;
					{post.likes.length > 2
						? `You and ${post.likes.length - 1} others`
						: `${post.likes.length} like${
								post.likes.length > 1 ? "s" : ""
						  }`}
				</>
			) : (
				<>
					<ThumbUpAltOutlined fontSize="small" />
					&nbsp;{post.likes.length}{" "}
					{post.likes.length === 1 ? "Like" : "Likes"}
				</>
			);
		}

		return (
			<>
				<ThumbUpAltOutlined fontSize="small" />
				&nbsp;Like
			</>
		);
	};

	const openPost = () => {
		history.push(`/posts/${post._id}`);
	};

	return (
		<Card className={classes.card} raised elevation={6}>
				<CardMedia
					className={classes.media}
					image={post.selectedFile}
					title={post.title}
				/>
				<div className={classes.overlay}>
			<ButtonBase
				component="span"
				onClick={openPost}
			>
					<Typography variant="h4">{post.title}</Typography>
			</ButtonBase>
					<Typography variant="h6">{post.artist}</Typography>
					<Typography variant="body1">{post.year}</Typography>
					<Typography variant="body2">
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>

				<Typography style={{ color: "black", fontFamily: "monospace" }}>
					Posted by: {post.name}
				</Typography>
				{(user?.result?.googleId === post?.creator ||
					user?.result?._id === post?.creator) && (
					<div className={classes.overlay2}>
						<Button
							style={{ color: "white" }}
							size="small"
							onClick={() => setCurrentId(post._id)}
						>
							<MoreHorizIcon fontSize="default" />
						</Button>
					</div>
				)}
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
					disabled={!user?.result}
					onClick={() => dispatch(likePost(post._id))}
				>
					<Likes />
				</Button>
				{(user?.result?.googleId === post?.creator ||
					user?.result?._id === post?.creator) && (
					<Button
						size="small"
						color="black"
						onClick={() => dispatch(deletePost(post._id))}
					>
						<DeleteIcon fontSize="small" />
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default Post;
