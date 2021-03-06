import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PostCard from '../../components/PostCard'
import NavBar from './NavBar'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() => ({
  root: {}
}))

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Giuliano Amorim",
      userName: "aragorn",
      avatar: "/images/avatars/avatar_1.png"
    },
    title: "Meu primeiro projeto de Rede Social - MERN",
    date: "November 29, 2020",
    description: "O que vocês estão achando do projeto?",
    hashtags: "#javascript, #reactjs, #express, #mongodb",
    image: "/images/posts/post_1.jpg"
  },
  {
    id: 2,
    author: {
      id: 2,
      name: "Leonardo Amorim",
      userName: "leo",
      avatar: "/images/avatars/avatar_2.png",
    },
    title: "Meu filho na Rede Social - MERN",
    date: "November 29, 2020",
    description: "Hello son",
    hashtags: "#son, #family, #express, #mongodb",
    image: "/images/posts/post_2.jpeg",
  }]

function Feed() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <Box display='flex'>
        <NavBar />
        <div className={classes.root}>
          {
            posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          }
        </div>
      </Box>
    </Container>
  )
}

export default Feed