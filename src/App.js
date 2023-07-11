import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Landing from "./Components/Landing";
import Home from "./Components/Home/Index";
import Emergency from "./Components/Emergency/Index";
import Info from "./Components/Info/Index";
import Select from "./Components/Select/Index";
import Symptoms from "./Components/Symptoms/Index";
import Result from "./Components/Result/Index";
import { ThemeButton } from "./Components/Style";

// actions
import { darkMode, defaultMode } from "./Components/features/ThemeSlice";
import { ThemeProvider } from "styled-components";

function App() {
  const { themeConfig } = useSelector((state) => state.themes)
  const dispatch = useDispatch()

  const switchTheme = () => {
    if (themeConfig.name === "light"){
      dispatch(darkMode())
    }else{
      dispatch(defaultMode())
    }
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/start" element={<Home />} />
          <Route path="/emergency-check" element={<Emergency />} />
          <Route path="/necessary-details" element={<Info />} />
          <Route path="/select-category" element={<Select />} />
          <Route path="/select-category/:area" element={<Symptoms />} />
          <Route path="/diagnosis" element={<Result />} />
        </Routes>
      </Router>
      <ThemeProvider theme={themeConfig}>
      <ThemeButton onClick={switchTheme}/>
      </ThemeProvider>
    </>
  );
}

export default App;
