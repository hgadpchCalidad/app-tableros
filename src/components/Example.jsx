
import React, { useEffect, useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const Example = () =>{

    useEffect(() => {

        console.log("sda")

        const fetchProducts = async () => {
            console.log("sda")
            const doc = new GoogleSpreadsheet('19fUHIe0D57yaFzADhaEC8BAyWkHsVvCPmPkiQFY0m9k', { apiKey: "AIzaSyAVxZw7BgAivZ782UhA4kcUOl88V3xFe5Y" });
            doc.loadInfo()
            console.log(doc);

            // Aquí puedes agregar el código para obtener los productos de la hoja de cálculo y establecerlos en el estado.
            // Por ejemplo:
            // const rows = await sheet.getRows();
            // setProducts(rows.map(row => ({ name: row['Product name'], color: row.Color, category: row.Category, price: row.Price })));
        };

        fetchProducts();
    }, []);


    return(<div></div>)
}


export default Example
