import React, { useEffect, useState } from 'react'
import SuggestionList from './SuggestionList';
import YogaDetails from './YogaDetails';
import yogaData from './YogData';
import './Search.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [selectedYoga, setSelectedYoga] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (query) {
                const filteredSuggestions = yogaData.filter((pose) =>
                    pose.name.toLowerCase().includes(query.toLowerCase())
                );
                setSuggestions(filteredSuggestions);
            } else {
                setSuggestions([]);
            }
        }, 300);
        return () => clearTimeout(timerId); // Cleanup the timeout
    }, [query]); // Debounce delay

    const handleSelect = (yoga) => {
        setSelectedYoga(yoga);
        setQuery('');
        setSuggestions([]);
    }

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search yoga poses..."
                    value={query}
                    onChange={handleInputChange}
                />
                {suggestions.length > 0 && <SuggestionList suggestions={suggestions} onSelect={handleSelect} />}
                {selectedYoga && <YogaDetails yoga={selectedYoga} />}
            </div>
        </>
    )
}

export default SearchBar