import React from 'react';
export const Greet = ({match}) => (
    <div>
        <div>{match.params.username}</div>
    </div>
)