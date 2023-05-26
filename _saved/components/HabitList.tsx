import React, { useEffect, useState } from 'react'
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'
import styles from './components.module.css'

// const $modalElement: HTMLElement = document.querySelector('#modalEl');

// const modalOptions: ModalOptions = {
//     placement: 'bottom-right',
//     backdrop: 'dynamic',
//     backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
//     closable: true,
//     onHide: () => {
//         console.log('modal is hidden');
//     },
//     onShow: () => {
//         console.log('modal is shown');
//     },
//     onToggle: () => {
//         console.log('modal has been toggled');
//     }
// }

type Props = {}

const data = [
    {
        title:"hello",
        color:"red"
    },
    {
        title:"test",
        color:"blue"
    },
    {
        title:"bing",
        color:"green"
    }
]

export default function HabitList({}: Props) {
    const [list, setList] = useState(data);
    const [newItem, setNewItem] = useState({
        title: "",
        color: "",
    });

    const handleAddNewItem = () => {
        if(newItem.title !== ""){

        }
    }

    const renderList = () => {
        return Object.keys(list).map((obj) => {
            <li className="test-white-400" key={obj}>Testing</li>
            console.log(obj)
        })  
    }

    return (
        <>
            <ul>{renderList()}</ul>
            <input 
                id="text-input"
                className={'text-input bg-inherit border-white ' + styles.textInput}
                type="text"
                placeholder='enter a habit here'
                onInput={() => {
                    const input = document.getElementById('text-input');
                    const value = (input as HTMLInputElement | null)?.value;
                    if (input !== null && value !== undefined){
                        input.style.width = value.length * 0.6 + 1 > 12 ? (value.length * 0.7 + 3) + 'ch' : '15ch';
                    }
                }}      
                onChange={(e) => 
                    setNewItem({
                        title : e.target.value,
                        color: newItem.color
                    })}
            />
        </> 
    )
}