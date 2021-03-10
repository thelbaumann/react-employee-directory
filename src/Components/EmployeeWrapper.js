
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';

function EmployeeWrapper() {

    const [EmployeeState, setEmployeeState] = useState([]);

    useEffect(() => {
        getRandomUserData()
    }, []);

    async function getRandomUserData() {
        console.log("we are getting data now!")
        const res = await axios.get("https://randomuser.me/api/?results=9&seed=seed");
        console.log(res);
        console.log(res.data.results);
        setEmployeeState(res.data.results);
    }

    const sort = (option) => {
        console.log("sorting is happening");

        if (option === 0) {
            getRandomUserData();
        } else if (option === 1) {
            const sorting = EmployeeState.sort((person1, person2) => {
                if (person1.name.first < person2.name.first) { 
                    return -1; 
                } else if (person1.name.first > person2.name.first) { 
                    return 1; 
                } else {
                    return 0;
                }
            });
            setEmployeeState([...sorting]);
        } else if (option === 2) {
            const sorting = EmployeeState.sort((person1, person2) => {
                if (person1.name.first > person2.name.first) { 
                    return -1; 
                } else if (person1.name.first < person2.name.first) { 
                    return 1; 
                } else {
                    return 0;
                }
            });
            setEmployeeState([...sorting]);
        } else if (option === 3) {
            const sorting = EmployeeState.sort((person1, person2) => {
                if (person1.name.last < person2.name.last) { 
                    return -1; 
                } else if (person1.name.last > person2.name.last) { 
                    return 1; 
                } else {
                    return 0;
                }
            });
            setEmployeeState([...sorting]);
        } else if (option === 4) {
            const sorting = EmployeeState.sort((person1, person2) => {
                if (person1.name.last > person2.name.last) { 
                    return -1; 
                } else if (person1.name.last < person2.name.last) { 
                    return 1; 
                } else {
                    return 0;
                }
            });
            setEmployeeState([...sorting]);
        } else {
            alert("Oops! Something went wrong! Please try sorting again!");
        }
        
    }

    return (

        <div>

            <form>
                <select id="sort" name="sort">
                    <option value="default">Default Sort</option>
                    <option value="firstAZ">First Name A-Z</option>
                    <option value="firstZA">First Name Z-A</option>
                    <option value="lastAZ">Last Name A-Z</option>
                    <option value="lastZA">Last Name Z-A</option>
                </select>
            </form>

            <EmployeeCard
                jsonData={EmployeeState}
                sort={sort}
            />
        </div>
    )
}

export default EmployeeWrapper;