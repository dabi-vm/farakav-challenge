import {
  MaterialProvider,
  reduxStore,
  themeOptions,
} from "@farakav-challenge/lib";
import { Provider as ReduxProvider } from "react-redux";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider store={reduxStore}>
      <MaterialProvider
        theme={(defaultTheme) => ({
          ...defaultTheme,
          ...themeOptions,
        })}
      >
        {children}
      </MaterialProvider>
    </ReduxProvider>
  );
};

export default Providers;
