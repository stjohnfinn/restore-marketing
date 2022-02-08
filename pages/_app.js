import '../styles/globals.css';
import React, {useState, useEffect} from 'react';
import AOS from 'aos';

function Restore({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}

export default Restore;