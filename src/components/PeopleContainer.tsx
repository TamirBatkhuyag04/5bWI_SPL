import Card from "./Card";
import { useState, useEffect } from "react";

type Person = {
    id: number;
    firstname: string;
    lastname: string;
    image: string;
};

export default function PeopleContainer() {
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        fetch("http://localhost:8055/items/people/").then(
            (response) => response.json().then((data: any) => {
                setPeople(data.data);
            })
        );
    }, []);
    console.log("people", people);

    return (
        <div className="pl-20 pr-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {people.map((person: Person) => {
                return (
                    <Card name={person.firstname} description={person.lastname} image={"http://localhost:8055/assets/" + person.image} />
                )
            })}
        </div>
    )
}
