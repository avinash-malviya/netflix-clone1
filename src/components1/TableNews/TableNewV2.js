import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Pagination from "@material-ui/lab/Pagination";
import axios from 'axios';
import List from '@material-ui/core/List';
import TableNewsCard from '../TableNewsCard/TableNewsCard';


const useStyles = makeStyles((theme)=>({
  close:{
    marginLeft:200,
  },
  newsContainer:{
  },
  
  pagination:{
    justifyContent:"center",
    marginLeft: "33%"
  }
  , 
  root:{
    maxWidth: "63%",
  }
}));

export default function TableNewsV2() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const classes = useStyles();
  const[users,setUsers]= useState([]);
  const[page,setPage]= useState({
    page:"0"
  });
  const[pageCount,setPageCount]= useState({
    pageCount:"0"
  });
  const [newsCards, setNewsCards] = useState([]) 
  
  const handlePageChange=(event, value)  => {
    console.log("value="+value);
    let nextOffset = (value*9) -9;
    updateNews(nextOffset);
  }

  const updateNews = (offset) => {
    axios.get("https://api.first.org/data/v1/news?limit=9&offset="+offset)
    .then(res => {
      const responseFromApi = res.data;
      setNewsCards(responseFromApi.data);
      setPage((offset/9) +1);
      let totalPageCount = Math.floor(responseFromApi.total/9)
      setPageCount(totalPageCount)
    })
  }

  useEffect(()=>{
    updateNews(0);
  },[])

  return (
   <Container className={classes.root}>
  <Grid container item xs={16} md={16}>
          <div className={classes.demo}>
            <List dense={dense}>
            {
    newsCards.map((news)=>{
      return (
          <TableNewsCard item key={news.id} newsDetails ={news}></TableNewsCard>
        )
    })
  }
            
            </List>
          </div>
        </Grid>
  <div className={classes.pagination}>
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