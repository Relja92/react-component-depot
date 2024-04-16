import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import DebouncedInputPage from "./pages/DebounceInputPage";
import HomePage from "./pages/HomePage";
import TextTruncatePage from "./pages/TextTruncatePage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/text-truncate" element={<TextTruncatePage />} />
        <Route path="/debounce-input" element={<DebouncedInputPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
