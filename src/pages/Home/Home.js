import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {AddTransactionBtn} from './Home.styles';

const Home = () => {
    return (
        <div>
            <h2>Home view</h2>

            <AddTransactionBtn>
                <AddIcon />
            </AddTransactionBtn>
        </div>
    );
};

export default Home;
