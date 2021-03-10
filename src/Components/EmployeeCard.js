import React from "react";

function EmployeeCard(props) {

  return (

    <div class="wrapper">
        {props.jsonData.map(employee => (

            <div className="card">

              <h2>{employee.name.first + " " + employee.name.last}</h2>

                  <img alt={employee.name.first + employee.name.last} src={employee.picture.large} />

                  <ul>
                    <li>
                      {employee.location.city + " [" + employee.location.timezone.offset + "]"}
                    </li>
                    <li>
                    <a href={`mailto:${employee.email}`}>{employee.email}</a>  
                    </li>
                    <li>
                      {employee.phone}
                    </li>
                  </ul>

            </div>

        ))}
    </div>

  );
}

export default EmployeeCard;
