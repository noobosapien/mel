import { Inter } from '@next/font/google';
import Layout from '@/components/Layout';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import ph from '@/public/1.png'
import ph1 from '@/public/2.png'
import ph2 from '@/public/3.png'


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Grid
        container
        direction="row"
        sx={{ marginTop: '4rem' }}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item sx={{borderRadius: '0%', height: '80vh'}} >
          <Grid container>
          <Grid item>
            <Box sx={{position:'relative', width: ' 40rem'}}>
              <Card sx={{position:"absolute"}}> 
                <CardMedia
                component="img"
                alt="work"
                height="340"
                image={ph.src}
                sx={{borderRadius: '2rem'}}
              />
              </Card>

              <Card sx={{position:"absolute", top: '18rem', left: '20rem'}}> 
                <CardMedia
                component="img"
                alt="work"
                height="320"
                image={ph2.src}
                sx={{borderRadius: '2rem'}}
              />
              </Card>

              <Card sx={{position:"absolute", top: '20rem', left: '-5rem'}}> 
                <CardMedia
                component="img"
                alt="work"
                height="440"
                image={ph1.src}
                sx={{borderRadius: '2rem'}}
              />
              </Card>

              
            </Box>
          </Grid>
          </Grid>
          </Grid>

          <Grid item>
            <Grid container justifyContent={"center"} alignItems={"center"} direction={'column'}>
            <Grid item>
              <Typography variant="h3">Auckland based</Typography>
            </Grid>

            <Grid item>
              <Typography variant='h4' sx={{fontWeight: '100', fontSize: '2rem'}}>Welders/Fabricators</Typography>
            </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{marginBottom: '10rem'}}/>

          <Grid item container justifyContent={'center'}>
            <Grid item>
              <Typography variant='h5' sx={{fontWeight: '100'}} textAlign={'center'}>
                We work with clients of a range of industries.
              </Typography>
            </Grid>
          </Grid>

        
      </Grid>
    </Layout>
  );
}
