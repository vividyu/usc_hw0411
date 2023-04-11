import React, { useState, useEffect } from 'react';
function solution(first, second) {
    const uuids = new Set([...first.map(obj => obj.uuid), ...second.map(obj => obj.uuid)]);
    const combined = [];

    uuids.forEach(uuid => {
        const firstObj = first.find(obj => obj.uuid === uuid) || {};
        const secondObj = second.find(obj => obj.uuid === uuid) || {};

        combined.push({
            uuid,
            name: firstObj.name || null,
            role: secondObj.role || null
        });
    });

    return combined;
}
const IntegratedList = ({ first, second }) => {
    const [combined, setCombined] = useState([]);

    useEffect(() => {
        const result = solution(first, second);
        setCombined(result);
    }, [first, second]);

    const sorted = [...combined].sort((a, b) => a.uuid - b.uuid);

    return (
        <div>
            <h2>Integrated List</h2>
            <ul>
                {sorted.map(({ uuid, name, role }) => (
                    <li key={uuid}>
                        {`UUID: ${uuid}, Name: ${name || 'null'}, Role: ${role || 'null'}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IntegratedList;
