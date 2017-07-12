import React from 'react';
import { connect } from 'react-redux'

function Home({state}){
    return (
        <h1>fuck you {state}</h1>
    )
}

export default connect(
    state =>({test:state.number})
)(Home);
