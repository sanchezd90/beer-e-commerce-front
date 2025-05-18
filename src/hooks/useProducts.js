import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BACKEND_URLS } from '../constants/endpoints'

const fetchProducts = async () => {
  const apiUrl = import.meta.env.VITE_API_URL
  try{
    const { data } = await axios.get(`${apiUrl}${BACKEND_URLS.PRODUCTS}`)
    return data
  }catch(error){
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.error || 'An error occurred while fetching products';      
      throw { status, message };
    } else {
      throw { status: 0, message: 'Error' };
    }
  }
}

export const useProducts = () => {  
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,    
  })  
}
