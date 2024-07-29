import React from 'react'

const ArrayDemo = () => {
    const festivals = [
        {
            name: "Diwali (Deepavali)",
            when: "October or November",
            significance: "Diwali, also known as the Festival of Lights, celebrates the victory of light over darkness and good over evil. It marks the return of Lord Rama to Ayodhya after a 14-year exile and his victory over the demon king Ravana.",
            celebrations: [
                "Homes are cleaned and decorated with rangoli (art patterns on the floor), lamps, and candles.",
                "Families light fireworks and burst crackers.",
                "People dress in new clothes, exchange gifts, and share sweets.",
                "Special prayers (pujas) are performed, particularly to Goddess Lakshmi, the goddess of wealth."
            ]
        },
        {
            name: "Holi",
            when: "March",
            significance: "Holi, the Festival of Colors, signifies the arrival of spring and the victory of good over evil. It is also associated with the legend of Prahlad and Hiranyakashipu and the playful activities of Krishna and Radha.",
            celebrations: [
                "People smear each other with colors and throw colored water.",
                "Bonfires are lit on the eve of Holi (Holika Dahan) to symbolize the burning of evil.",
                "Music, dance, and festive foods, such as gujiya and bhang, are enjoyed."
            ]
        },
        {
            name: "Navratri and Durga Puja",
            when: "September or October",
            significance: "Navratri is a nine-night festival dedicated to the worship of the goddess Durga in her nine forms. Durga Puja, particularly celebrated in West Bengal, commemorates Durga's victory over the buffalo demon Mahishasura.",
            celebrations: [
                "Navratri involves fasting, feasting, and dance forms like Garba and Dandiya in Gujarat.",
                "Durga Puja includes elaborate statues of Durga, processions, cultural performances, and community feasts.",
                "People visit beautifully decorated pandals (temporary structures) and offer prayers."
            ]
        },
        {
            name: "Eid-ul-Fitr",
            when: "Based on the Islamic lunar calendar, after the month of Ramadan",
            significance: "Eid-ul-Fitr marks the end of Ramadan, the Islamic holy month of fasting. It is a festival of breaking the fast and expressing gratitude to Allah.",
            celebrations: [
                "Special prayers (Salat al-Eid) are performed in mosques.",
                "Families and friends gather to share festive meals and sweets.",
                "People give Zakat (charity) and Fitrana (alms) to the needy.",
                "New clothes are worn, and greetings of 'Eid Mubarak' are exchanged."
            ]
        },
        {
            name: "Christmas",
            when: "December 25",
            significance: "Christmas celebrates the birth of Jesus Christ, the central figure of Christianity.",
            celebrations: [
                "Churches hold midnight Masses and special services.",
                "Homes are decorated with Christmas trees, lights, and nativity scenes.",
                "Families exchange gifts and share festive meals.",
                "Carol singing and community events are common."
            ]
        },
        {
            name: "Pongal",
            when: "January",
            significance: "Pongal is a harvest festival celebrated in Tamil Nadu, thanking the sun god and nature for a bountiful harvest.",
            celebrations: [
                "The festival lasts for four days: Bhogi, Thai Pongal, Mattu Pongal, and Kaanum Pongal.",
                "Rice is cooked with milk and jaggery in new pots and offered to the sun god.",
                "Cows are decorated and worshipped.",
                "People clean and decorate their homes, and traditional kolam designs are drawn at the entrance."
            ]
        },
        {
            name: "Ganesh Chaturthi",
            when: "August or September",
            significance: "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the elephant-headed god of wisdom and prosperity.",
            celebrations: [
                "Clay idols of Ganesha are installed in homes and public places.",
                "Prayers, devotional songs, and offerings of sweets (especially modaks) are made.",
                "After the festival, the idols are immersed in water bodies in a ritual called Visarjan."
            ]
        },
        {
            name: "Raksha Bandhan",
            when: "August",
            significance: "Raksha Bandhan celebrates the bond between brothers and sisters. Sisters tie a rakhi (sacred thread) on their brothers' wrists, symbolizing protection and love.",
            celebrations: [
                "Sisters perform aarti and pray for their brothers' well-being.",
                "Brothers give gifts to their sisters and pledge to protect them.",
                "Families gather for a festive meal."
            ]
        },
        {
            name: "Makar Sankranti",
            when: "January",
            significance: "Makar Sankranti marks the transition of the sun into the zodiac sign of Capricorn (Makara). It is a harvest festival and is celebrated in various forms across India.",
            celebrations: [
                "In Gujarat, it is celebrated as Uttarayan with kite flying.",
                "In Punjab, it is known as Lohri, involving bonfires and dancing.",
                "In Tamil Nadu, it is part of the Pongal festival.",
                "People take holy dips in rivers, and sweets made of sesame and jaggery are shared."
            ]
        },
        {
            name: "Janmashtami",
            when: "August",
            significance: "Janmashtami celebrates the birth of Lord Krishna, an incarnation of Vishnu.",
            celebrations: [
                "Devotees fast and sing devotional songs.",
                "Temples and homes are decorated with images and idols of Krishna.",
                "Dramatic reenactments of Krishna's childhood (Ras Lila) are performed.",
                "Dahi Handi events involve breaking a pot of curd hung at a height."
            ]
        },
        {
            name: "Onam",
            when: "August or September",
            significance: "Onam is the harvest festival of Kerala, celebrating the return of the legendary King Mahabali.",
            celebrations: [
                "People decorate their homes with Pookalam (floral rangoli).",
                "Traditional dances like Thiruvathira Kali and Kathakali performances are held.",
                "A grand feast called Onam Sadya is prepared with various dishes.",
                "Snake boat races (Vallam Kali) are organized."
            ]
        },
        {
            name: "Baisakhi",
            when: "April",
            significance: "Baisakhi is a harvest festival celebrated in Punjab, marking the beginning of the new harvest season. It also commemorates the formation of the Khalsa in 1699 by Guru Gobind Singh.",
            celebrations: [
                "People participate in processions and visit gurdwaras.",
                "Traditional Bhangra and Gidda dances are performed.",
                "Community feasts (Langar) are organized.",
                "Farmers thank God for the harvest and pray for prosperity."
            ]
        }
    ];
    console.log(festivals);
    const styleP = {
        backgroundColor: "brown",
        color: "#f0f0f0",
        width: "auto",
        padding: "20px"
    }
    return (
        <>
            {
                festivals.map((festival, index) => (
                    <div className="festival" key={index}>
                        <div className="festival-name" style={{ width:"262px", padding:"10px 5px", margin:"0px", backgroundColor: "gray", color:"#f0f0f0", fontWeight: "bolder", fontSize: 24 }}>
                            {festival.name}
                        </div>
                        <p><b>When:</b> {festival.when}</p>
                        <p className="significance" style={styleP}>
                            <b>Significance: </b>{festival.significance}
                        </p>
                        <div className="celebrations">
                            <h4>Celebrations:</h4>
                            <ul className="celebration">
                                {
                                    festival.celebrations.map((celebrate, key) => (
                                        <li key={key}>{celebrate}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ArrayDemo


