import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import theme from "./theme";
import Cart from "./views/Cart";
import Products from "./views/Products";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <Container sx={{
        mt: {xs: theme.spacing(8), sm: theme.spacing(10), lg: theme.spacing(12)}
      }}>
        <Routes>
          <Route path='/' element={<Products/>}/>

          <Route path='/products/:slug' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
