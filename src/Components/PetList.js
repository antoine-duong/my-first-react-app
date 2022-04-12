import animals from "../animals";

const PetList = ()=>{
    return(
        <>
            {
                animals.map(animal => {
                    return (
                    <div key={ animal.id }>
                        <h2>{ animal.name }</h2>
                        <p>Type: { animal.type }</p>
                        <p>Size: { animal.size }</p>
                        <img src={ animal.picture } alt={`A cute ${animal.type} named ${ animal.name }`}/>
                    </div>
                    )
                })
            }
        </>
    )
}

export default PetList;