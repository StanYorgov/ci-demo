import axios from 'axios';
import { ApiResponse } from '../types/apiResponse';

const API_URL = 'http://localhost:8080/';

export const fetchMessage = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching message:', error);
    throw error;
  }
};