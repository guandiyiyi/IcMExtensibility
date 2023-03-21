import axios from 'axios';
import { ICard } from './ICard';

export const getCards = async (id: number, token: string): Promise<ICard> => {  
  const response = await axios.get<ICard>(`http://localhost:5000/api/todo/${id}`, {headers: {
    'Authorization': token
  }});
  return response.data;
};