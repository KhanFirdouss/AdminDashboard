import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';



const ActionButton = () => {
    return (
        <div>
        <CreateIcon onClick={() => { console.log('onClick'); }}/><DeleteIcon onClick={() => { console.log('onClick'); }}/>
        </div>
    );
};

export default ActionButton;