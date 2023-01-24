import { ColoredMessage } from "./components/ColordMessage";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/Styledcomponents";
import { Emotion } from "./components/Emotion";

export const App = () => {
  return (
    <>
      <h1>aaa</h1>
      <p>aaa</p>
      <ColoredMessage color="blue" message="お元気ですか？" />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
};
