import { Link, LinkDesign } from '@ui5/webcomponents-react';

import React, { useContext } from 'react'
import { AppContext } from '../store/appstore'

const Home = () => {
  const [state, dispatch] = useContext(AppContext)
  
  return (
    <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
      Getting Started with UI5 Web Component for React
    </Link>
  );
}

export default Home;


