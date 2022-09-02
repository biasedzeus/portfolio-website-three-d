import React from 'react';
import Projects from './Projects';

const Resume = () => {
  return (
    <div className='resume'>
        <nav>
            <header><h1>Bhanu Pratap Singh Chauhan</h1></header>
            <ul>
                
                <li><img src="" alt="github" /></li>
                <li><img src="" alt="linkedIn" /></li>
                <li><img src="" alt='AngelList'/> </li>
            </ul>
        </nav>
        <Projects/>
        <Projects/>
        <Projects/>
        <Projects/>

    </div>
  )
}

export default Resume