import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Container from "./components/Container/Constainer";
import TopBar from "./components/TopBar/TopBar";
import ContainerFlex from "./components/ContainerFlex/ContainerFlex";
import CardGrid from "./components/CardGrid/CardGrid";
import CreateForm from "./components/CreateForm/CreateForm";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 1);
  }, [currentId, dispatch]);

  return (
    <Container>
      <TopBar />
      <ContainerFlex direction="row">
        <CardGrid setCurrentId={setCurrentId} />
        <CreateForm currentId={currentId} setCurrentId={setCurrentId} />
      </ContainerFlex>
    </Container>
  );
};

export default App;
