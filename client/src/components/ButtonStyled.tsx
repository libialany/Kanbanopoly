import { ThemeProvider } from "@mui/material";
import { theme } from "../constants";

interface Props {
  handleClickOpen: () => void;
}
function ButtonStyled({ handleClickOpen }: Props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <button onClick={handleClickOpen}>
          <p>Add Task</p>
        </button>
      </ThemeProvider>
    </>
  );
}

export default ButtonStyled;
