
const Cards = ({title, description, color}) => {
    console.log(color);

    return ( 
        <>
        <section className="card" 
            style={{ border: `2px solid ${color}` }}>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </section>
        </>
     );
}
 
export default Cards;