import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center', color: 'white' }}>Welcome to</h1>
    <h1 style={{ textAlign: 'center', color: 'springgreen' }}>https://fgo.ramadoka.com</h1>
    <br></br>
    <h1 style={{ textAlign: 'center', color: 'white' }}>Are you an esport FGO player?</h1>
  </div>
))
