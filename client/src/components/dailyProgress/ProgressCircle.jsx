import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressCircle() {
  return (
    <div className="ml-3 p-6 min-w-[280px] rounded drop-shadow bg-white-2 dark:bg-black-2">
        <CircularProgress variant="determinate" value={33} size={232} thickness={2}
        sx={{
            position: 'absolute',
            color: '#FFA800',
            zIndex: 1,
        }}/>
        <div className="flex flex-col rounded-full h-full aspect-square bg-white-3 shadow-inner dark:bg-black-1 justify-center items-center">
            <p className="text-7xl">1/3</p>
            <p>Tasks Done</p>
        </div>
    </div>
  )
}
