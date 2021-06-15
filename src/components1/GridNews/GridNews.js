import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Container,Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewsCard from '../NewsCard/NewsCard';
import Pagination from "@material-ui/lab/Pagination";
import axios from 'axios';


const useStyles = makeStyles((theme)=>({
  close:{
    marginLeft:200,
  },
  newsContainer:{
    padding:40,
    width: "84vw"
  },
  pagination:{
    justifyContent:"center",
    marginLeft: "33%"
  }, 
  root:{
    maxWidth: "63%",
  }
}));

export default function MediaCard() {

  const classes = useStyles();
  const[users,setUsers]= useState([]);
  const[page,setPage]= useState({
    page:"0"
  });
  const[pageCount,setPageCount]= useState({
    pageCount:"0"
  });
  const [newsCards, setNewsCards] = useState([]) 
  const[record,setRecord]= useState([]);
  
  const handlePageChange=(event, value)  => {
    console.log("value="+value);
    let nextOffset = (value*6) -6;
    updateNews(nextOffset);
  }

  const updateNews = (offset) => {
    axios.get("https://api.first.org/data/v1/news?limit=6&offset="+offset)
    .then(res => {
      const responseFromApi = res.data;
      setNewsCards(responseFromApi.data);
      setPage((offset/6) +1);
      let totalPageCount = Math.floor(responseFromApi.total/6)
      setPageCount(totalPageCount)
    })
  }

  useEffect(()=>{
    updateNews(0);
  },[])

  return (
   <Container className={classes.root}>
     <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="baseline" spacing="10" className={classes.newsContainer}>
   {
    newsCards.map((news)=>{
      return (
            <Grid item key={news.id}>
              <NewsCard newsDetails ={news}/>
            </Grid>
          
        )
    })
  }  
  </Grid><div className={classes.pagination}>
  <Pagination 
              className="my-3"
              count={pageCount}
              page={page}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              size="large"
              onChange={handlePageChange}
            /> </div>
  </Container> 


  );
}