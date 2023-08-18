import React, {useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressCircle({ habits }) {
  const [text, setText] = useState("")
  const [value, setValue] = useState(0)

  useEffect(() => {
    let count = 0
    for (const habit of habits) {
      if (habit.status) count++
    }
    setValue(count/habits.length*100)
    setText(count + "/" + habits.length)
  }, [ habits ])

  return (
    <div className="ml-3 p-6 min-w-[280px] rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
        <CircularProgress variant="determinate" value={value} size={232} thickness={2}
        sx={{
            position: 'absolute',
            color: '#FFA800',
            zIndex: 1,
        }}/>
        <div className="flex flex-col rounded-full h-full aspect-square shadow-inner bg-b-primary dark:bg-db-primary justify-center items-center">
            <p className="text-7xl text-t-primary dark:text-dt-primary">{text}</p>
            <p className="text-t-primary dark:text-dt-primary">Tasks Done</p>
        </div>
    </div>
  )
}
