import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  `;

  const IntoShape = styled.div`
    ${Shape}
    clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
    background-color: #ced4e2;
  `;

  return (
    <div className="App">
      <Navbar> </Navbar>
      <Intro></Intro>
      <IntoShape></IntoShape>
    </div>
  );
}

export default App;
