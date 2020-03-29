import React from 'react';

const SubjectCard = ({name, icon, summary, tools, children}) => (
    <div className={"subject-card"}>
        <div className='subject-card-icon'>{icon}</div>
        <h1>{name}</h1>
        <div>
            <h2>What I Do</h2>
            <div className='subject-card-summary'>{summary}</div>
        </div>
        <div>
            <h2>Tools</h2>
            <div className='subject-card-tools'>
                <ul>
                    {tools.map((tool, id) => (
                        <>
                        <li key={id}>{tool}</li>{','}
                        </>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default SubjectCard;