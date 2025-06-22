import React from "react";

function SelectLimit(props) {
    return (
        <select value={props.value} onChange={(e) => props.onLimitChange(Number(e.target.value))} className="select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>

        </select>

    );
}

export default SelectLimit;