import React, {Component} from 'react';
import api from './api';

class Professor extends Component{
    state = {
        professores:[],            
    }
      
    async componentDidMount(){
        const responseProfessores = await api.get('/professores');
        console.log(responseProfessores.data);            
        this.setState({professores:responseProfessores.data})            
    }
    render(){
        const {professores} = this.state;
          return(
            <div>         
                <table>
                    <thead>
                        <th>NOME</th>
                        <th>SOBRENOME</th>                        
                        <th>EMAIL</th>
                    </thead>
                    <tbody>
                        {professores.map(professor => (
                            <tr key="professor.codigo">
                                <td>{professor.nome}</td>
                                <td>{professor.sobrenome}</td>                               
                                <td>{professor.email}</td>
                            </tr>
                        ))}                            
                    </tbody>
                </table>         
            </div>
          )}
        }
export default Professor;