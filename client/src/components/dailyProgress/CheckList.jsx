import React from 'react'
import ListItem from './ListItem'

export default function CheckList() {
  return (
    <div className="flex flex-col mr-3 w-full">
        <p className='ml-2 text-4xl whitespace-nowrap'>Marshall's Tasks For Today, July 5th</p>
        <ListItem title="Workout" color="#E8505B"/>
        <ListItem title="Read" color='#6BCB77'/>
        <ListItem title="Stretch" color='#71A9FE'/>
        <button>
          <div className="flex justify-between w-full dark:bg-black-2 bg-white-2 drop-shadow px-2 rounded-md my-2">
              <p className="m-auto py-1">+</p>
          </div>
        </button>
    </div>
  )
}
