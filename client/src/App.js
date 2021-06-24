import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Container from "./components/Container/Constainer";
import TopBar from "./components/TopBar/TopBar";
import ContainerFlex from "./components/ContainerFlex/ContainerFlex";
import CardGrid from "./components/CardGrid/CardGrid";
import CreateForm from "./components/CreateForm/CreateForm";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <TopBar />
      <ContainerFlex direction="row">
        <CardGrid />
        <CreateForm />
      </ContainerFlex>
    </Container>
  );
};

export default App;
