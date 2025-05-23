import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BACKEND_URLS } from '../constants/endpoints'

const fetchStockPrice = async (id) => {
    if(!id) return null;
    const apiUrl = import.meta.env.VITE_API_URL
    try {
        const { data } = await axios.get(`${apiUrl}${BACKEND_URLS.STOCK_PRICE}/${id}`)
        return data
    } catch (error) {
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.error || 'An error occurred while fetching stock price';            
            throw { status, message };        
        } else {                       
            throw { status: 0, message: 'Error' };
        }
    }
}

export const useStockPrice = (id, disableRefetch = false) => {    
    return useQuery({   
        queryKey: ['stock-price', id],
        queryFn: () => fetchStockPrice(id),
        refetchInterval: disableRefetch ? false : 5000, 
        refetchIntervalInBackground: !disableRefetch,
        retry: (_failureCount, error) => {
            return !!error.response;
        }
    })
}