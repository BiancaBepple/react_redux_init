import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Title, Card, SendButton, MyInput, PaperNome } from './styles';

import PersonItem from '../../components/PersonItem';
import * as PersonActions from '../../store/modules/person/actions';



class Main extends Component {
    state = {
        persons: [],
        newPerson: '',
    };

    componentDidMount() {
        const list = localStorage.getItem('persons');
        if (list) {
            this.setState({ persons: JSON.parse(list) });
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.state.persons) {
            localStorage.setItem('persons', JSON.stringify(this.state.persons))
        };
    };

    handleInputChange = e => {
        this.setState({ newPerson: e.target.value });
    };

    handleSubmit = e => {
        this.sendToStore(this.state.newPerson);
        e.preventDefault();
        this.setState({ persons: [...this.state.persons, this.state.newPerson], newPerson: '', });

    };

    sendToStore = (person) => {
        const {addToPerson} = this.props;
        addToPerson(person);
    }

    handleDelete = person => {
         this.setState({
             persons: this.state.persons.filter(item => item !== person),
         });
        console.log(person);
    };

    render() {
        return (
            <>
                <Card><ul>
                    <Title>Lista de pessoas</Title>
                    <form onSubmit={this.handleSubmit}>
                        <MyInput 
                        label='Digite um nome'
                        type='text' 
                        onChange={this.handleInputChange} 
                        value={this.state.newPerson} />
                        <SendButton type='submit'>Enviar</SendButton>
                    </form>
                    </ul>
                
                    <ul>
                        {this.state.persons.map(item => (
                           <PaperNome>
                            <PersonItem
                            key={item}
                            person={item} 
                            onDelete={() => this.handleDelete(item)}
                            />
                            </PaperNome>
                        

                    ))} 
                    </ul>

                </Card>
            </>
        );
    }
}

const mapDispatchToProps = dispatch =>
bindActionCreators(PersonActions, dispatch);
export default connect(null, mapDispatchToProps)(Main);