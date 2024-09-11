// services/api.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchCandlestickData = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/candlestick-data/`);
  return response.data;
};

export const fetchLineChartData = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/line-chart-data/`);
  return response.data;
};

export const fetchBarChartData = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/bar-chart-data/`);
  return response.data;
};

export const fetchPieChartData = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/pie-chart-data/`);
  return response.data;
};
