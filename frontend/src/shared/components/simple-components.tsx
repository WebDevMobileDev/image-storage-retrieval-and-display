import { Typography, Box } from '@mui/material'
import React from 'react'


export const LevelHeading = ({children}: {children: any}) => {
  return (
    <Typography variant="h6" sx={{color: '#555'}} mb={1}>{children}</Typography>
  )
}

export const Level = ({children}: {children: any}) => {
  return (
    <Box mb={4}>{children}</Box>
  )
}

