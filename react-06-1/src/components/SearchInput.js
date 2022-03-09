import React, { useState, useEffect } from "react";
import './Component.css';
import axios from "axios";

const SearchInput = (props) => {

    const [search, setSearch] = useState('')

    const [results, setResults] = useState([])

    // searchInput 改變時執行
    useEffect(() => {
        setTimeout(()=>{
            searchWiki(search)
        },500)
    }, [search])

    useEffect(() => {
        props.results(results);
    }, [results])

    const searchWiki = async (value) => {
        if (value) {
            const res = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: value
                }
            })

            if (res.data && res.data.query.search) {
                setResults(res.data.query.search)
            } else {
                setResults([])
            }
        }
    }

    const onSubmit = () => {
        console.log(search)
    }

    return <form className="ui form">
        <div className="field">
            <label>Search</label>
            <input className="prompt"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </div>
    </form>

}

export default SearchInput;

