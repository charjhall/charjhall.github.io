import React from 'react';

export default function Ingredient(name, index) {
    return (
        <li key={index}>{name}</li>
    );
}