import '../App.css';

const card = [
    {
        img: './bottal.png',
        text: 'fhdjhvjdhckl',
        name: 'hello',
        organisation: 'hhhhhh'
    }
];

export default function Card() {
    return (
        <div className="card">
            {
                card.map((item, i) => (
                    <div className='item' key={i}>
                        <img src={item.img} className="imgcard"/>
                        <h3 className='txtcard'>{item.text}</h3>
                        <h5 className='namecard'>{item.name}</h5>
                        <h5 className='orgcard'>{item.organisation}</h5>
                    </div>
                ))
            }
        </div>
    )
}