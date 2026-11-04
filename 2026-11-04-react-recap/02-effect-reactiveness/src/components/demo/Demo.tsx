import { useEffect, useState } from "react"

function getDogs() {
    return ['Pongo', 'Chompie', 'Betty']
}

function getCats() {
    return ['Maestro', 'Mitzie', 'Pinkie']
}

export default function Demo() {

    const [animals, setAnimals] = useState<string[]>([])
    const [isDogs, setIsDogs] = useState<boolean>(true)


    function switchAnimals() {
        setIsDogs(!isDogs)
    }

    useEffect(() => {
        setAnimals(isDogs ? getDogs() : getCats())
    }, [isDogs])

    return (
        <div className="Demo">
            <select onChange={switchAnimals}>
                <option value="dogs">Dogs</option>
                <option value="cats">Cats</option>
            </select>

            <ul>
                {animals.map(animal => <li key={animal}>{animal}</li>)}
            </ul>
        </div>
    )
}