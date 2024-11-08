import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { fetchUsers } from '../utils/utilUser';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Llama a `fetchUsers` para obtener los usuarios y actualizar el estado
        fetchUsers((fetchedUsers) => {
            setUsers(fetchedUsers);
            setFilteredUsers(fetchedUsers); // Inicialmente muestra todos los usuarios
        });
    }, []);

    return (
        <Autocomplete
            sx={{width: "40%"}}
            options={filteredUsers}
            getOptionLabel={(option) => option.name || option.userName}
            renderInput={(params) => (
                <TextField {...params} label="Search Users" variant="outlined" fullWidth />
            )}
            onChange={(_, value) =>{
                console.log(value); 
                navigate("/user/" + value.id)
                }
            }
            onInputChange={(event, value) => {
                // Filtra usuarios en base al valor de entrada en `Autocomplete`
                const results = users.filter(user =>
                    user.userName.toLowerCase().includes(value.toLowerCase()) ||
                    user.name.toLowerCase().includes(value.toLowerCase())
                );
                setFilteredUsers(results);
            }}
            renderOption={(props, option) => (
                <li {...props} key={option.id}>
                    {option.name} ({option.userName})
                </li>
            )}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            noOptionsText="No results found"
        />
    );
};
