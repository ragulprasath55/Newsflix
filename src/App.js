import Error from "./components/Error";
import Nav from "./components/Nav";
import NewsList from "./components/NewsList";
import { NewsProvider } from "./Context/NewsContext";
import { Container, OuterContainer } from "./styledcomponents/Containers";
import GlobalStyle from "./styledcomponents/GlobalStyle";

function App() {
  return (
    <OuterContainer>
      <Container>
        <GlobalStyle />
        <NewsProvider>
          <Nav></Nav>
          <NewsList />
          <Error />
        </NewsProvider>
      </Container>
    </OuterContainer>
  );
}

export default App;
