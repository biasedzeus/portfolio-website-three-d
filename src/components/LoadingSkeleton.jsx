import React from 'react';
import { Box,Skeleton } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Box sx={{ minHeight:'400px', pt: 0.5,marginTop:'4rem' }}>
    <Box margin="1rem"><Skeleton variant="rectangular" margin="1rem" width={"70vw"} height={218}/></Box>
    <Box margin="1rem"><Skeleton variant="rectangular" margin="1rem" width={"70vw"} height={218}/></Box>
    <Box margin="1rem"><Skeleton variant="rectangular" margin="1rem" width={"70vw"} height={218}/></Box>
    <Box margin="1rem"><Skeleton variant="rectangular" margin="1rem" width={"70vw"} height={218}/></Box>
     
    </Box>
  )
}

export default LoadingSkeleton;