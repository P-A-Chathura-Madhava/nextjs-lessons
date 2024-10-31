import React from 'react'
import { useTheme } from '../components/theme-provider'

function ClientRoutePage() {
    const theme = useTheme();
    const settings = {
        dots: true
    };

  return (
    <h1 style={{color: theme.colors.primary}}>Client Route</h1>
  )
}

export default ClientRoutePage