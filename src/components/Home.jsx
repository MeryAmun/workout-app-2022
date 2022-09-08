import React,{useState} from 'react';
import { Box } from '@mui/material';
import { HeroBanner,SearchExercises,Exercises } from './index'

const Home = () => {
  return (
    <Box>
<HeroBanner/>
<SearchExercises/>
<Exercises/>
    </Box>
  )
}

export default Home