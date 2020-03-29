import React, { Fragment } from 'react';
import SubjectCard from './SubjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faDesktop, faAtom } from '@fortawesome/free-solid-svg-icons'


const Subjects = () => (
    <Fragment>
        <SubjectCard 
        name={'Data Science'} 
        icon={<FontAwesomeIcon icon={faChartLine}/>}
        summary={'Analyzing data with statistics and making predictions'}
        tools={['python', 'pandas', 'matplotlib', 'seaborn']}
        />
        <SubjectCard 
        name={'Front End'} 
        icon={<FontAwesomeIcon icon={faDesktop}/>}
        summary={'Building applications for your web browser'}
        tools={['HTML', 'CSS', 'Javascript', 'React', 'Sass', 'WebAssembly']}
        />
        <SubjectCard 
        name={'Physics'} 
        icon={<FontAwesomeIcon icon={faAtom}/>}
        summary={'Modelling the real world with high-level mathematics'}
        tools={['Linear Algebra', 'Statistics', 'Functional Analysis', 'Calculus', 'Partial Diff. Eqs', 'Discrete Math']}
        />
    </Fragment>
);

export default Subjects;