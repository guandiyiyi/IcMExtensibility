import axios from 'axios';
import { ICard } from './ICard';

const headers = {
  'Authorization': 'Bearer [user token]'
};

export const getCards = async (id: number): Promise<ICard> => {  
  const response = await axios.get<ICard>(`http://localhost:5000/api/todo/${id}`, {/*withCredentials: true,*/ headers: headers});
  return response.data;
};