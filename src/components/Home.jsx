import React,{useState} from 'react';
import { Box } from '@mui/material';
import { HeroBanner,SearchExercises,Exercises } from './index'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([]);
  return (
    <Box>
<HeroBanner/>
<SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart}
 setExercises={setExercises}/>
<Exercises bodyPart={bodyPart} setBodyPart={setBodyPart}
 setExercises={setExercises} exercises={exercises}/>
    </Box>
  )
}

export default Home