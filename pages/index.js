import { Inter } from '@next/font/google';
import Layout from '@/components/Layout';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ph from '@/public/1.png'
import ph1 from '@/public/2.png'
import ph2 from '@/public/3.png'
import ph3 from '@/public/4.png'
import ph4 from '@/public/5.png'
import ph5 from '@/public/6.png'
import ph6 from '@/public/7.png'


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

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
            <Box sx={{position:'relative', width: '40rem'}}>
              <Card sx={{position:"absolute",top: matchesMd ? '1rem':'0rem', left:matchesMd ? '6rem': '0rem'}}> 
                <CardMedia
                component="img"
                alt="work"
                height={matchesMd ? "240" : '340'}
                image={ph.src}
                sx={{borderRadius: '2rem'}}
              />
              </Card>

              <Card sx={{position:"absolute", top: '18rem', left: '20rem'}}> 
                <CardMedia
                component="img"
                alt="work"
                height={matchesMd ? "240" : '340'}
                image={ph2.src}
                sx={{borderRadius: '2rem'}}
              />
              </Card>

              <Card sx={{position:"absolute", top: matchesMd ? '10rem':'20rem', left:matchesMd ? '10rem': '-5rem'}}> 
                <CardMedia
                component="img"
                alt="work"
                height={matchesMd ? "300" : '380'}
                image={ph1.src}
                sx={{borderRadius: '2rem'}}
              />
              </Card>

              
            </Box>
          </Grid>
          </Grid>
          </Grid>

          <Grid item>
            <Grid container justifyContent={"center"} alignItems={"center"} direction={'column'} spacing={10}>
            <Grid item>
              <Typography variant="h3" textAlign={'center'}>Auckland based</Typography>
            </Grid>

            <Grid item>
              <Typography variant='h4' textAlign={'center'} sx={{fontWeight: '100', fontSize: '2rem'}}>Welders/Fabricators</Typography>
            </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{marginBottom: '10rem'}}/>

          <Grid item container justifyContent={'center'} alignItems={'center'} direction={'column'} spacing={10}>
            <Grid item>
              <Typography variant='h3' sx={{fontSize: '2.5rem', fontWeight: 700}} textAlign={'center'}>
                We work with clients of a range of industries.
              </Typography>
            </Grid>

            <Grid item>
              <Grid container justifyContent={'center'} spacing={10}>
                <Grid item>
                  <Grid container direction={'column'} spacing={8}>
                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Marine</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Horticulture</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Architectural</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Aquaculture</Typography>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item>
                  <Grid container direction={'column'} spacing={8}>
                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Aviation</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Medical</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Forestry</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Scientific Research </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction={'column'} spacing={8}>
                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Hospitality</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Food processing</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Farming</Typography>
                    </Grid>

                    <Grid item>
                      <Typography textAlign='center' sx={{fontWeight: 400, fontSize: '1.5rem'}}>Artistic</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{marginBottom: '10rem'}}/>

          <Grid item container direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
              <Typography variant='h3' sx={{fontSize: '2.5rem', fontWeight: 700}}>Featured Work</Typography>
            </Grid>

            <Grid item sx={{marginBottom: '10rem'}}/>

            <Grid item container justifyContent={'center'} spacing={10}>
              <Grid item>
                <Grid container direction={'column'} spacing={10}>
                  <Grid item>
                    {/* Placeholder */}
                    <Card > 
                      <CardMedia
                      component="img"
                      alt="work"
                      height="440"
                      image={ph3.src}
                      sx={{borderRadius: '1rem'}}
                      />
                    </Card>
                  </Grid>

                  <Grid item>
                    {/* Placeholder */}
                    <Card > 
                      <CardMedia
                      component="img"
                      alt="work"
                      height="440"
                      image={ph4.src}
                      sx={{borderRadius: '1rem'}}
                    />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction={'column'} spacing={10}>
                  <Grid item>
                    {/* Placeholder */}

                    <Card > 
                      <CardMedia
                      component="img"
                      alt="work"
                      height="440"
                      image={ph5.src}
                      sx={{borderRadius: '1rem'}}
                    />
                    </Card>
                  </Grid>

                  <Grid item>
                    {/* Placeholder */}
                    <Card > 
                      <CardMedia
                      component="img"
                      alt="work"
                      height="440"
                      image={ph6.src}
                      sx={{borderRadius: '1rem'}}
                    />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{marginBottom: '10rem'}}/>

          <Grid item>

          </Grid>
        
      </Grid>
    </Layout>
  );
}
