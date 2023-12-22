// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import "../styles/globals.css";
import * as React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { motion, AnimatePresence } from "framer-motion";
import "./global.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AnimatePresence mode="wait">
          <motion.div key={router.pathname}>
            <Component {...pageProps} />

            <motion.div
              className="slide-in"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0 }}
              exit={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>

            <motion.div
              className="slide-out"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
