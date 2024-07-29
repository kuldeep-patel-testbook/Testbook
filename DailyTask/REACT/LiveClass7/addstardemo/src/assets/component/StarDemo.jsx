import React, { useState } from 'react'

const StarDemo = () => {
    const [isShow, setIsShow] = useState(false);
    const [stars, setStars] = useState([]);
    const [shotingStars, setShoutingStars] = useState([]);
    const handleClick = () => {
        setIsShow(!isShow);
    }

    const generateRandomStarPosition = () => {
        const topX = Math.random() * window.innerHeight - 100;
        const leftY = Math.random() * window.innerWidth - 100;
        return { topX, leftY }
    }

    const addStar = () => {
        // First Way
        /*const newStars = [];
        for (let index = 0; index < 10; index++) {
            newStars.push({
                id: stars.length + index,
                top: Math.random() * window.innerHeight - 100,
                left: Math.random() * window.innerWidth - 100
            });
        }
        setStars((prevState) => [...prevState, ...newStars]);*/

        //Second Way
        setStars([...stars, generateRandomStarPosition()]);

    }
    const addShoutingStar = () => {
        setShoutingStars([...shotingStars, generateRandomStarPosition()]);
    }
    return (

        <div>
            <div className="starContainer">
                {isShow && <div className="circleMoon"></div>}
                <button type='button' className="btnonoff" onClick={handleClick}>{isShow ? 'Turn Off Moon' : 'Turn On Moon'}</button>
                <button type='button' className="btnStar" onClick={addStar}>Add Star</button>
                <button type='button' className="btnStar shoutingStar" onClick={addShoutingStar}>Add Shouting Star</button>
                {
                    stars.map((star, index) => (
                        <div key={index} className={`star ${isShow ? "glow" : "" }`} style={{ top: star.topX, left: star.leftY }}><span className="material-icons">star</span></div>
                    ))
                }
                {
                    shotingStars.map((shotStar, index) => (
                        <div key={index} className={`star ${isShow ? "shotStar" : "" }`} style={{ top: shotStar.topX, left: shotStar.leftY }}>  </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StarDemo