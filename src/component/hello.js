import React from 'react';


const Hello=()=>{
    // return(
    //     <div>hello manju</div>
    // )
    return React.createElement ('div',
    {id:'helo'},
    React.createElement('h1',null,"welcome") )
}
export default Hello;