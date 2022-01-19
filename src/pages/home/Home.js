import React from 'react';
import Card from '../../components/Card';
import { useCollection } from '../../hooks/useCollection'

//Material UI components for responsive grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//styles
import './Home.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home(){
  const {documents, error} = useCollection('productos')
  console.log(documents)

    return(
    <div className="container" style={{"margin":"1em"}}>
    <div>
    <h1>Esmeraldas Colombianas</h1>
      
      
      <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} justify = "center"   >
 
{documents && documents.map((document) => (
  <Grid  item xs={12} sm={6} md={4} lg ={3}>
    {/* <img src={document.imgUrl} />
    <h1>{document.name}</h1>
    <p>{document.details}</p>
    <span>Ct:{' '} {document.ct}</span>
    <span><br/>Precio:{' '} {document.price}</span> */}
    <div key={document.id} align="center">
    <Card  
          key = {document.imgUrl}
          title={document.name}
          description ={document.details.substring(0,100)}
          imgLink ={document.imgUrl}
          item = {document} 
          />
    </div>
  </Grid>
))}      

      </Grid>

    </Box>
    </div>
      
      
      
      
      
      
      
      
      </div>)
}


export default Home;