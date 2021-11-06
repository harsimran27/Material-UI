import './App.css';
import { Typography, Button, Card, CardMedia, CardContent, CardActions, AppBar, Toolbar, CssBaseline, Grid, Container } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyle from "./style";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography align="center" variant="h5" color="textSecondary" paragraph>
              this is my  pragraph. used to test the paragraph element in material-ui which i started learning now. To start with material-ui i decided to design a simple web layout.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See All Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/daily"
                    title="card image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography gutterBottom variant="h6" >
                      This is content card where we can provide info to the ui.
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button size="samll" variant="outlined" color="primary">View</Button>
                    <Button size="small" variant="outlined" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
