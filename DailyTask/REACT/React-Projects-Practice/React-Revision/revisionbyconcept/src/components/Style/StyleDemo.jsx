import React from 'react'
import './StyleDemo.css';
import ArrayDemo from '../Array/ArrayDemo';

const StyleDemo = () => {

    const styleP = {
        backgroundColor: "blue",
        color: "#f0f0f0",
        width: "auto",
        padding: "20px"
    }

    return (
        <>
            <div className="mainContainer_festival">
                <h1>Festival Of India</h1>
                <p className="festivalIntro">
                    India is a land of diverse cultures and traditions, and this diversity is reflected in the numerous festivals celebrated across the country. Here is a detailed overview of some of the major festivals of India:
                </p>

                {/* <div className="festival">
                    <div className="festival-name" style={{ backgroundColor: "skyblue", width: 100 }}>
                        1. Diwali (Deepavali)
                    </div>
                    <p><b>When:</b> October or November</p>
                    <p className="significance" style={styleP}>
                        <b>Significance: </b>Diwali, also known as the Festival of Lights, celebrates the victory of light over darkness and good over evil. It marks the return of Lord Rama to Ayodhya after a 14-year exile and his victory over the demon king Ravana.
                    </p>
                    <div className="celebrations">
                        <h4>Celebrations:</h4>
                        <ul className="celebration">
                            <li>Homes are cleaned and decorated with rangoli (art patterns on the floor), lamps, and candles.</li>
                            <li>Families light fireworks and burst crackers.</li>
                            <li>People dress in new clothes, exchange gifts, and share sweets.</li>
                            <li>Special prayers (pujas) are performed, particularly to Goddess Lakshmi, the goddess of wealth.</li>
                        </ul>
                    </div>
                </div>
                <div className="festival">
                    <div className="festival-name">
                        2. Holi
                    </div>
                    <p><b>When:</b> March</p>
                    <p className="significance">
                        <b>Significance: </b>Holi, the Festival of Colors, signifies the arrival of spring and the victory of good over evil. It is also associated with the legend of Prahlad and Hiranyakashipu and the playful activities of Krishna and Radha.
                    </p>
                    <div className="celebrations">
                        <h4>Celebrations:</h4>
                        <ul className="celebration">
                            <li>People smear each other with colors and throw colored water.</li>
                            <li>Bonfires are lit on the eve of Holi (Holika Dahan) to symbolize the burning of evil.</li>
                            <li>Music, dance, and festive foods, such as gujiya and bhang, are enjoyed.</li>
                            <li>Special prayers (pujas) are performed, particularly to Goddess Lakshmi, the goddess of wealth.</li>
                        </ul>
                    </div>
                </div>
                <div className="festival">
                    <div className="festival-name">
                        3. Navratri and Durga Puja
                    </div>
                    <p><b>When:</b> September or October</p>
                    <p className="significance">
                        <b>Significance: </b>Navratri is a nine-night festival dedicated to the worship of the goddess Durga in her nine forms. Durga Puja, particularly celebrated in West Bengal, commemorates Durga's victory over the buffalo demon Mahishasura.
                    </p>
                    <div className="celebrations">
                        <h4>Celebrations:</h4>
                        <ul className="celebration">
                            <li>Navratri involves fasting, feasting, and dance forms like Garba and Dandiya in Gujarat.</li>
                            <li>Durga Puja includes elaborate statues of Durga, processions, cultural performances, and community feasts.</li>
                            <li>People visit beautifully decorated pandals (temporary structures) and offer prayers.</li>
                        </ul>
                    </div>
                </div>

                <div className="festival">
                    <div className="festival-name">
                        4. Eid-ul-Fitr
                    </div>
                    <p><b>When:</b> Based on the Islamic lunar calendar, after the month of Ramadan</p>
                    <p className="significance">
                        <b>Significance: </b>Eid-ul-Fitr marks the end of Ramadan, the Islamic holy month of fasting. It is a festival of breaking the fast and expressing gratitude to Allah.
                    </p>
                    <div className="celebrations">
                        <h4>Celebrations:</h4>
                        <ul className="celebration">
                            <li>Special prayers (Salat al-Eid) are performed in mosques.</li>
                            <li>Families and friends gather to share festive meals and sweets.</li>
                            <li>People give Zakat (charity) and Fitrana (alms) to the needy.</li>
                            <li>New clothes are worn, and greetings of "Eid Mubarak" are exchanged.</li>
                        </ul>
                    </div>
                </div>
                <div className="festival">
                    <div className="festival-name">
                        5. Christmas
                    </div>
                    <p><b>When:</b> December 25</p>
                    <p className="significance">
                        <b>Significance: </b>Christmas celebrates the birth of Jesus Christ, the central figure of Christianity.
                    </p>
                    <div className="celebrations">
                        <h4>Celebrations:</h4>
                        <ul className="celebration">
                            <li>Churches hold midnight Masses and special services.</li>
                            <li>Homes are decorated with Christmas trees, lights, and nativity scenes.</li>
                            <li>Families exchange gifts and share festive meals.</li>
                            <li>Carol singing and community events are common.</li>
                        </ul>
                    </div>
                </div> */}

                {/* Using Js  Array Data load */}
                
                <ArrayDemo />
                

            </div>
        </>
    )
}

export default StyleDemo