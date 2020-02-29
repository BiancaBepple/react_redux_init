import React from 'react';
import {connect} from 'react-redux';

import {Nav, navButton} from './styles';

function Header({personCount}){
    return (
        <>
    <Nav>
        Total: {personCount}
        <navButton type='submit'> Enviar
        </navButton>
    </Nav>
    </>
    );
}

const mapStateToProps = state => ({
    personCount: state.person.length,
    persons: state.persons
});


export default connect(mapStateToProps)(Header);