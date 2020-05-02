import React from 'react';

const Numbers = ({persons}) => {
    return(
        <div>
            <h1>Numbers</h1>
            {persons.map((person, index) => (
                <div key={index}>
                    <li>
                        {person.name} &nbsp;
                        <span>{person.number}</span>
                    </li>
                </div>
            ))}
        </div>
    );
};

export default Numbers;