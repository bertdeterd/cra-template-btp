import { Link, LinkDesign } from '@ui5/webcomponents-react';

import React, { useContext, useEffect } from 'react'
import { AppContext } from '../store/appstore'
import useStartup from '../api/useStartup'

const Home = () => {
  const [state, dispatch] = useContext(AppContext)
  const { getUser } = useStartup()
  
  useEffect( () => {
    getUser()
  }, [])

  return (
    <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
      Hello {state.user.fullName}, Get Started with UI5 Web Component for React
    </Link>
  );
}

export default Home;


