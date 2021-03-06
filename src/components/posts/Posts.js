import React from 'react'
import Post from './post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'
const Posts=(props)=> {
    const classes = useStyles()
    const posts = useSelector((state)=>state.posts);
    console.log(posts.length)
  
    
  return (
      
   !posts.posts ? <CircularProgress></CircularProgress> : 
   <Grid className={classes.container} container alignItems='stretch' spacing={3}>
     {
       posts.posts.map((post,index)=>
       index >4 ?'':
       <Grid key={post._id+index} item xs={12} sm={12} ms={6} lg={5}>
         <Post  setCurrentId ={props.setCurrentId} post ={post}></Post>

       </Grid>
       )
     }


   </Grid>
  )
}

export default Posts