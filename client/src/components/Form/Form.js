import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from "./styles";
import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {
    const [albumData, setAlbumData] = useState({
        title: '',
    artist: '',
    year: '',
    message: '',
    tags: '',
    selectedFile: '',

    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : 0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(post) {
            setAlbumData(post);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId === 0) {
            dispatch(createPost({ ...albumData, name: user?.result?.name }));
        } else {

            dispatch(updatePost(currentId, { ...albumData, name: user?.result?.name }));
        }
        clear();
        
    };

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant='h5' style={{fontFamily: 'monospace'}}>
                    Sign up or sign in to share your VINYL SILO!
                </Typography>
            </Paper>
        )
    };

    const clear = () => {
        setCurrentId(0);
        setAlbumData({
			title: "",
			artist: "",
			year: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form} ${classes.textfield}`} onSubmit={handleSubmit} >
                <Typography variant='h6'>{currentId ? 'Edit' : 'Add'} an Album</Typography>
                <TextField 
                name='title' 
                variant='outlined' 
                label='Title' 
                fullWidth
                value={albumData.title}
                onChange={(e) => setAlbumData({ ...albumData, title: e.target.value })}
                />
                <TextField 
                name='artist' 
                variant='outlined' 
                label='Artist' 
                fullWidth
                value={albumData.artist}
                onChange={(e) => setAlbumData({ ...albumData, artist: e.target.value })}
                />
                <TextField 
                name='year' 
                variant='outlined' 
                label='Year' 
                fullWidth
                value={albumData.year}
                onChange={(e) => setAlbumData({ ...albumData, year: e.target.value })}
                />
                <TextField 
                name='message' 
                variant='outlined' 
                label='Message' 
                fullWidth
                value={albumData.message}
                onChange={(e) => setAlbumData({ ...albumData, message: e.target.value })}
                />
                <TextField 
                name='tags' 
                variant='outlined' 
                label='Tags' 
                fullWidth
                value={albumData.tags}
                onChange={(e) => setAlbumData({ ...albumData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setAlbumData({ ...albumData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant='contained' color='white' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='white' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;