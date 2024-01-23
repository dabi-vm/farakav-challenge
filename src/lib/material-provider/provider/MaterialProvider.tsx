import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeOptions, createTheme } from "@mui/material";
import { faIR as coreFaIR } from "@mui/material/locale";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren, useMemo } from "react";
import { themeOptions } from "../theme/theme";

interface IProps {
  theme?(themeOptions: ThemeOptions): Partial<ThemeOptions>;
}

export const MaterialProvider = ({
  children,
  theme,
}: PropsWithChildren<IProps>) => {
  const cacheRtl = createCache({
    key: "muiCache",
  });
  const innerTheme = theme?.(themeOptions);
  const usedTheme = useMemo(
    () => createTheme(innerTheme ?? themeOptions, coreFaIR),
    [innerTheme]
  );

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={usedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};
