import React, { useEffect, useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const DataTable = () => {
    const products = [
        { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
        { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
        { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    ];

      const [data, setData] = useState([]);

      useEffect(() => {
        console.log("sda")
        alert("as")

          const fetchProducts = async () => {

              const serviceAccountAuth = new JWT({
                  email: "serviceapigooglesheet@airy-bit-417914.iam.gserviceaccount.com",    
                  key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClrLYlM4DCpKlg\nyzICRxFAK6HwhKg+wC4XioG9sKhFFwub0CNDtS8bzMRfB76tgBuav1f2ORgAQ0cG\nvOmEmETHEPkNZTMsRAA0V6HNiYWUty8a96yU5inwqnnWrYwyF/9MwfbK9YFCKSj2\nI5HczLuat6o+YJcYW+6K5s2EqUtfdMqu7loLxCdJaqDyIuP2HLuzaspmpF9dXHDM\n+65SYWq45lzgOgh9vdKDP9uhZDE7IAQkL204iO60xgS+6yBTwK5k8V+Tjeu+8bfa\nnujCs9RGeo/7muMut5/y6Vw0cDdJQlb2sRcYk2HYPJtf4fHYJJ+RsicXTqXkNpa4\nhD3aT4RNAgMBAAECggEABIt1WUkaM7y10yyGMniZAr9vqzWbmLhHsc7TekzZtA0X\nlqGiDGrW+cmnOJgky4U9IwSZ7B/RObvR7sX8SrsTZlNf3m8zqF40YNTNx0g9Fg3k\nYk//0WHZYRTvT+VMEdlSRo/EYZLuH2hNPsG0PNaQIVFlssP0wSIceOQvjrKtZgpQ\nP2uj/RpGVP/w8F0MxHrvN+W9LeJ/GfOzQp6hq8xCQvrqFqNWSf/zuDC/cVeiunLm\nipXUD04xLOdW4gvcEuO9M4oM+Ord6ufTHWt46oAdecpGAhrHNWce6HnJmLKrODOo\n+6sVyq35SeVbApoZpWeNGWk/1tG+8dqt484E6+cwvQKBgQDQ76cdX5nojYbvCkTY\ngUOUW2lFQcwIHJV5CcejXjMT61pAEfDf9fp+wuPtq9dWqPxs6mYZmjR/OeUadndq\nNScsg7JUCIqD9900cI1XZU0oePQMOkfdPY0yVoQrzAHGPjIHZv9DV/6MtIbaT+R5\n6bcwDanbyOO07mz0EaFPDi9TMwKBgQDK/mAu+2nrczMwc996gcqzXykJ00xWu8dk\nrbeEwWJOI8Hmas3agZO/88h1kIXsW71SuI1JNFnkWF+06jjpwnepOh9jhRzNy1Tu\nNIeJvH0lBiZBSagLz728TLJbirYM19i/+qcq2Mss7lyvNkdsGPnS1Am2Ah+7j745\nH9KCwhXKfwKBgDqtIwx/vbRukpdtFdqLqtPuPAkkKk2Y4W1ljrhVixir/uOBZlkv\nNlMFHoevu8Dtoj5gMZ49DUMxmiKtZGniVYcN0TYCVAwtvuSsOzVxEJMuLLOGZoo+\nb/nUDDhUiacH7nrftQ5PlwAi7sA+sZZ/SV/oZmx/5Vr5noWIsfmGrUm7AoGASJDO\nyXzOzICOGBAUH7MuRxkJjp2eeJMAIJmJNUf8YHqf4kLj++y+aKw5SO21Ml1JPL0E\npNq2F88Px5jDZ61BIZnJhsYbGeZKIi1dFnvvMMEWA9jU3gQRi7LPP7JCiizPKzHr\neIGvgAxlzazVs2rqQ9fQ8OOpfF9SXRFnK58+MvkCgYAk4shxLPL/NPgVZw3mlkW5\n8PW3qVLkVmPdM4kg+962m2fD/dRg2XZM1WwHDGwzOwMMfdo/GIB3cTCQt3FNizfC\ntTSZiCCgRElJvSTvYzRD85vVKrA4iwna5UJylg5hx9X1U4ZjMt4JXhBFavswSOWu\nkv2E8rdwkwZfdAHfADqkYA==\n-----END PRIVATE KEY-----\n",
                  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
              });
  
              const doc = new GoogleSpreadsheet('121koqK1ULprO4ySBa7TMX680k8XdcfDpRWpVyNW7Ucg', serviceAccountAuth);
  
  
              const sheet = doc.sheetsById("635610287");
              console.log(sheet.title);
              console.log(sheet.rowCount);
  
              // Aquí puedes agregar el código para obtener los productos de la hoja de cálculo y establecerlos en el estado.
              // Por ejemplo:
              // const rows = await sheet.getRows();
              // setProducts(rows.map(row => ({ name: row['Product name'], color: row.Color, category: row.Category, price: row.Price })));
          };
  
          fetchProducts();
      }, []);
  

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="pb-4 bg-white dark:bg-gray-900">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        {/* SVG icon */}
                    </div>
                    <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Product name</th>
                        <th scope="col" className="px-6 py-3">Color</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className={`bg-white ${index < products.length - 1 ? 'border-b' : ''} dark:bg-gray-800 dark:border-gray-700`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</th>
                            <td className="px-6 py-4">{product.color}</td>
                            <td className="px-6 py-4">{product.category}</td>
                            <td className="px-6 py-4">{product.price}</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
