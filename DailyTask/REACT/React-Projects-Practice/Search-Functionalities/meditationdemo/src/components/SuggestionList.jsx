import React from 'react'

const SuggestionList = ({ suggestions, onSelect }) => {
    
    return (
        <ul className="suggestions">
            {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => onSelect(suggestion)}>
                    <div className="suggestion-item">
                        <img src={suggestion.image} alt={suggestion.name} />
                        <div className="suggestion-text">
                            <h4>{suggestion.name}</h4>
                            <p>{suggestion.description.length > 45 ? `${suggestion.description.substring(0,45)}...` :
                                suggestion.description}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default SuggestionList