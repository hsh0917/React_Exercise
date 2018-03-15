import React, {component} from 'react';

class HobbyList extends React.Component {
  render(){
    const liStyle = {fontSize: `1.5em`};
    const hobbies = ["Sleeping", "Eating", "Cuddling"];
    return (
      <ul>
        {hobbies.map((value, i) => {
          return <li key={i} style={liStyle}>{value}</li>  // Anytime we render an array, we need to give each element a unique key which is important for React rendering. 
                                                    // Key should be a unique number that has something to do with the data.
        })}
      </ul>
    );
  }
}

export default HobbyList;