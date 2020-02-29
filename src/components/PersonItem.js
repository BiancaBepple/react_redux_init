import React from 'react';
import PropTypes from 'prop-types';
import {DeleteButton, Nome} from '../views/Main/styles';
import DeleteIcon from '@material-ui/icons/Delete';

function PersonItem({person, onDelete}){
    return(
        <li key={person}>
            <Nome>{person}</Nome>
            <div>
            <DeleteButton onClick={onDelete} type="button"  startIcon={<DeleteIcon></DeleteIcon>}>Deletar</DeleteButton>
            </div>
            </li> 
    );
}

PersonItem.defaultProps ={
    person: 'Person not found'
}

PersonItem.propTypes = {
    person: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default PersonItem;