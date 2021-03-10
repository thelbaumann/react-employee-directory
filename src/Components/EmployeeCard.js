import React from "react";

function EmployeeCard(props) {

  return (

    <div className="wrapper">
      
        {props.jsonData.map(employee => (

            <div className={props.view} key={employee.login.uuid}>

              <img alt={employee.name.first + employee.name.last} src={employee.picture.large} />

              <div class="tableNameWrap">
                <h2>{employee.name.first + " " + employee.name.last}</h2>
              </div>

              <div class="tableUlWrap">
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

            </div>

        ))}
    </div>

  );
}

export default EmployeeCard;
