import React, { Component } from 'react';
import './pessoas.css';
import { useTable } from "react-table";

class Pessoas extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
    this.mount = this.mount.bind(this)
  }

  mount() {
    console.log('React teste');
    fetch('/api/pessoas')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Pessoas fetched...', customers)));
  }

  mount1() {
    fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('Pessoas fetched...', customers)));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount}>Pega tabela</button>
        <table>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
          {this.state.customers.map(customer =>
              <tr key={customer.value}>
                <td>{customer.value}</td>
                <td>{customer.idade}</td>
              </tr>
          )}
        </table>
        <ul>
        </ul>
      </div>
    );
  }
}

// const columns = [
//   { field: 'nome', headerName: 'Nome', width: 130 },
//   { field: 'idade', headerName: 'Idade', width: 70 }]

// const columns = [
//   {
//     Header: "Nome",
//     accessor: "value"
//   },
//   {
//     Header: "Idade",
//     accessor: "idade"
//   }
// ];
//
// class Pessoas extends Component {
//   constructor() {
//     super();
//     this.state = {
//       customers: []
//     };
//     this.mount = this.mount.bind(this)
//   }
//
//   mount() {
//     console.log('React teste');
//     fetch('/api/pessoas')
//         .then(res => res.json())
//         .then(customers => this.setState({customers}, () => console.log('Pessoas fetched...', customers)));
//   }
//
//   mount1() {
//     fetch('/api/customers')
//         .then(res => res.json())
//         .then(customers => this.setState({customers}, () => console.log('Pessoas fetched...', customers)));
//   }
//
//   render() {
//     return (
//         // <Button
//         //     variant="primary"
//         //     disabled={isLoading}
//         //     onClick={!isLoading ? handleClick : null}
//         // >
//         //   {isLoading ? 'Loading…' : 'Click to load'}
//         // </Button>
//         // <div>
//         //   <button onClick={this.mount}>oi</button>
//         //   <ul>
//         //     {this.state.customers.map(customer =>
//         //         <li key={customer.value}>{customer.value} {customer.idade}</li>
//         //     )}
//         //   </ul>
//         // </div>
//         <table {...getTableProps()}>
//           <thead>
//           {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                     <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//                 ))}
//               </tr>
//           ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map(cell => {
//                     return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//                   })}
//                 </tr>
//             );
//           })}
//           </tbody>
//         </table>
//     );
//   }
// }

export default Pessoas;
