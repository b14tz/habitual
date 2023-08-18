import React from 'react'
import ListItem from './ListItem'

export default function CheckList({ habits, name, toggleCompletion }) {

  function renderListItems() {
    return Object.keys(habits).map(i => {
      return (
        <ListItem key={i} id={i} {...habits[i]} toggleCompletion={toggleCompletion}/>
      )
    })
  }

  return (
    <div className="flex flex-col mr-3 w-full">
        <h3 className='ml-2 whitespace-nowrap text-t-primary dark:text-dt-primary'>{name}'s Tasks For Today</h3>
        {/* <ListItem title="Workout" color="#E8505B"/>
        <ListItem title="Read" color='#6BCB77'/>
        <ListItem title="Stretch" color='#71A9FE'/> */}
        {renderListItems()}
        <button>
          <div className="flex justify-between w-full bg-b-secondary dark:bg-db-secondary drop-shadow px-2 rounded-md my-2">
              <p className="m-auto py-1 text-t-primary dark:text-dt-primary">+</p>
          </div>
        </button>
    </div>
  )
}
