import { DndProvider } from "react-dnd";
import "./App.css";
import Index from "./components/Index";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Index />
      </DndProvider>
    </>
  );
}

export default App;
