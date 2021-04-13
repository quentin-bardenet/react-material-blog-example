import React from "react";
import PostsList from "./components/PostsList";
import { useMediaPredicate } from "react-media-hook";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const mode = useMediaPredicate("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  return (
    <ThemeProvider theme={theme[mode]}>
      <CssBaseline />
      <PostsList />
    </ThemeProvider>
  );
}

export default App;
