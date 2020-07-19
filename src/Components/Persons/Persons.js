import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.delete(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.nameChange(event, person.id)}
      />
    );
  });
};

export default Persons;
