import React from 'react';
import "./List.css";

const List = (props) => {
  return (
    <div className="Student">
        <h2>Student data </h2>
        <table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Hindi</th>
                    <th>English</th>
                    <th>Science</th>
                    <th>Math</th>
                    <th>Total marks</th>
                    <th>Percentage</th>
                </tr>
            </thead>
       
        <tbody>
            {props.data.map((item) =>{
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.hindi}</td>
                        <td>{item.english}</td>
                        <td>{item.science}</td>
                        <td>{item.math}</td>
                        <td>{item.hindi+item.english+item.science+item.math }</td>
                        <td>{(((item.hindi+item.english+item.science+item.math) /400)*100).toFixed(2)}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </div>
  )
}
export default List;