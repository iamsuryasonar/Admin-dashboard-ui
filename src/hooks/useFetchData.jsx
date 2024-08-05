import { useEffect, useState } from 'react';

function useFetchData() {
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch('../../../public/static_data.json')
            if (!response.ok) {
                throw new Error('Response was not ok');
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return data;
}

export default useFetchData;