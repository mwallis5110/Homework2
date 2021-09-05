import React, {useState} from 'react';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';

function Navigation(props) {
    function displayCurrentPage() {
      if (props.currentPage === 1) {
        return <About />;
      } else if (props.currentPage === 2) {
        return <Projects />;
      }
    }    

    return (
        <div>
            {displayCurrentPage()}     
        </div>
    )
}

export default Navigation

