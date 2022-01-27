

//import React from 'react';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    const getItems = async() => {
        const response = await fetch(
            url,{
            method:'GET',
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 21d47454cbc676384aee1277daf2392f290b25fa'
            },
        })

        const items = await response.json();
        setItems(items);
        setLoading(false);
    };

    useEffect(() => {
        getItems();
    }, [url] );
    return {loading, items, getItems};
};
