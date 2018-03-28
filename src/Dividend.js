import React, { Component } from 'react';
import DividendRow from './DividendRow';

class Dividend extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: [
		{
		  name: 'Jason Lee',
		  dividendYield: '0.1'
		},
        {
          name: 'TCS',
          dividendYield: '0.4'
        },
        {
          name: 'Infosys',
          dividendYield: '0.5'
        },
        {
          name: 'HCL',
          dividendYield: '0.6'
        }]
    }
  }
  render() {
    return (
      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>DividendYield</th>
            </tr>
        </thead>
        <tbody>
          {this.state.lists.map(list => {
            return <DividendRow name={list.name} dividendYield={list.dividendYield} />
          })}
        </tbody>
      </table>
    );
  }
}

export default Dividend;