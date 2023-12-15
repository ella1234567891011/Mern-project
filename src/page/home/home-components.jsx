import React from 'react';
import Header from '../../navigation/header/header.component'
import Directory from '../../components/directory/directory.component';
import './home-styles.css';


const HomePage = () => {
    return (
        <>
        <Header/>
        <div>
          <Directory/>
        </div>
        </>
    );
}

export default HomePage;