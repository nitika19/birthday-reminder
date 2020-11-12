import React from 'react';

const list = (props) => {
    return (
        <div>
            {props.people.map( (people) => {
                const {id,name,age,image} = people;
                return <article key={id} className="person">
                    <img src={image} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age}</p>
                    </div>
                </article>
            })}
        </div>
    )
}

export default list;