import Cards from "../components/Cards";
import { useState } from "react";
import data from "../data/data";
const Documentatie = () => {
    const [showData, setShowData] = useState(data)

    return ( 
        <main>
        
        
        <section>

        {showData.map((d) => (
            <Cards key={d.id} title={d.title} description={d.description}/>
        ))}

        </section>
     
       </main>
     );
}

export default Documentatie;