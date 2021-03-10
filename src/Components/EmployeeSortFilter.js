
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function EmployeeSortFilter() {

    const [EmployeeState, setEmployeeState] = useState([]);

    useEffect(() => {
        getRandomUserData()
    }, []);

    const [view, setView] = useState('card');

    const handleViewChange = (event, nextView) => {
        setView(nextView);
      };

    async function getRandomUserData() {
        console.log("we are getting data now!")
        const res = await axios.get("https://randomuser.me/api/?results=9&seed=seed");
        console.log(res);
        console.log(res.data.results);
        setEmployeeState(res.data.results);
    }

    const handleSort = (option) => {
        console.log("sorting is happening");

        if (option === "default") {
            getRandomUserData();
        } else if (option === "firstAZ") {
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
        } else if (option === "firstZA") {
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
        } else if (option === "lastAZ") {
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
        } else if (option === "lastZA") {
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
                <select id="sort" name="sort" onChange={(val) => handleSort(val.target.value)}>
                    <option value="default">Default Sort</option>
                    <option value="firstAZ">First Name A-Z</option>
                    <option value="firstZA">First Name Z-A</option>
                    <option value="lastAZ">Last Name A-Z</option>
                    <option value="lastZA">Last Name Z-A</option>
                </select>
            </form>

            <ToggleButtonGroup value={view} exclusive onChange={handleViewChange}>
                <ToggleButton value="table" aria-label="table">
                    <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="card" aria-label="car">
                    <ViewModuleIcon />
                </ToggleButton>
            </ToggleButtonGroup>

            <EmployeeCard
                jsonData={EmployeeState}
                view={view}
            />
        </div>
    )
}

export default EmployeeSortFilter;