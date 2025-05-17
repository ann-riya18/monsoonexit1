import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';



function Home() {

  const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then((res) => {
                setBlogData(res.data)
            })
    })

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {blogData.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="200"
                image={blog.img_url}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  {blog.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {blog.content}
                </Typography>
                <Button variant="contained" color="error" sx={{ mr: 1 }}>
                  DELETE
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#8e24aa' }}>
                  UPDATE
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;