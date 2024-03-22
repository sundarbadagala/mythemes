import { useContext } from "react";
import { ThemeContext } from "../theme/theme.context";

function Main() {
  const { handleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={handleTheme}>hi</button>
    </div>
  );
}

export default Main;
