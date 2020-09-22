const places = [
    {
        id: 1,
        placeName: "coxesbazar",
        imgUrl: "https://i.ibb.co/Y283NmH/cox2.jpg",
        description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world..."
    },
    {   
        id: 2,
        placeName: 'sreemongol',
        imgUrl: "https://i.ibb.co/f2CWW60/sreemongol.jpg",
        description: "It is said the name Sreemangal is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor. A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient ..."
    },
    {
        id: 3,
        placeName: 'sondorban',
        imgUrl: "https://i.ibb.co/DDbv1zH/sondorban.jpg",
        description:"The Sundarban National Park is a National Park, Tiger Reserve, and a Biosphere Reserve in West Bengal, India. It is part of the Sundarbans on the Ganges Delta, and adjacent to the Sundarbans Reserve Forest in Bangladesh. The ..."
    }
]

const somePlaces = [...places];

const shuffle = a =>{
    for  (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i-1], a[j] ] = [a[j], a[i-1]];
        
    }
}

shuffle(somePlaces);

export default somePlaces;