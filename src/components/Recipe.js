import React from 'react';

export default function Recipe(name, index, meals, selectedMeals, setSelectedMeals) {
    const [checked, setChecked] = React.useState(false);
    return (
        <li key={index} onClick={()=>{
            if (!checked) {
                let newSelectedMeals = selectedMeals;
                newSelectedMeals[name] = meals[name]
                setSelectedMeals(newSelectedMeals);
            } else {
                let newSelectedMeals = selectedMeals;
                delete newSelectedMeals[name];
                setSelectedMeals(newSelectedMeals);
            }
            let newCheckedValue = !checked;
            setChecked(newCheckedValue);
        }}>
            <input type="checkbox" id="cb" checked={checked} onChange={()=>{
                let newCheckedValue = !checked;
                setChecked(newCheckedValue);
            }}/>
            <label>{name}</label>
        </li>
    );
}