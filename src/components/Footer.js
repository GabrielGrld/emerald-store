import { Container, Grid, Box, Link  } from "@mui/material"

//Styles

import Styles from "./Footer.css"

// source code: https://www.youtube.com/watch?v=HCsFwwolXZw

export default function Footer() {
    return <footer>
        <Box className="footerbox"
         px={{xs: 3, sm: 10}} 
         py={{xs: 3, sm:3}} 
         sx={{backgroundColor:"var(--main-text-color)", color:"var(--main-bg-color)"}}
         >
          <Container maxWidth = "lg">
            <Grid container spacing={5}>
               <Grid item xs={12} sm={4} >
                  <Box borderBottom={1}>Help</Box> 
                  <Box>
                      <Link href="/" color="inherit">
                        Contact
                      </Link>
                  </Box>
                  <Box>
                      <Link href="/" color="inherit">
                        Support
                      </Link>
                  </Box>
                  <Box>
                      <Link href="/" color="inherit">
                        Privacy Policy
                      </Link>
                  </Box>  
               </Grid> 
{/* another column */}
               <Grid item xs={12} sm={4} >
                  <Box borderBottom={1}>Account</Box> 
                  <Box>
                      <Link href="/" color="inherit">
                        Login
                      </Link>
                  </Box>
                  <Box>
                      <Link href="/" color="inherit">
                        Register
                      </Link>
                  </Box>                   
               </Grid> 
{/* another column */}
               <Grid item xs={12} sm={4} >
                  <Box borderBottom={1}>Messages</Box> 
                  <Box>
                      <Link href="/" color="inherit">
                        Backup
                      </Link>
                  </Box>
                  <Box>
                      <Link href="/" color="inherit">
                        Hisotry
                      </Link>
                  </Box>
                  <Box>
                      <Link href="/" color="inherit">
                        Promotions
                      </Link>
                  </Box>  
               </Grid> 

            </Grid>
            <Box textAlign="center" pt={{xs: 2, sm: 2}} pb={{xs: 5, sm:0}}>
                Emerald Store  &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
    </footer>
}