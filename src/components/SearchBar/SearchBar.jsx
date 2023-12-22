import React, {useState} from 'react'
import s from './SearchBar.module.css'

export const SearchBar = ({setQuery}) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = event => {
        event.preventDefault()

        setQuery(inputValue)
    }


    return (
        <header className={s.header}>
            <form onSubmit={onSubmit} className={s.form}>
                <input className={s.input}
                 type="text"
                name='inputValue' 
                value={inputValue}
                onChange={e => {setInputValue(e.target.value)}}
                 />
            </form>
        </header>
    )


}
