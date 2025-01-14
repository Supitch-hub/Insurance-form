import axios from 'axios';

export const submitInsuranceData = async (formData) => {
  const response = await axios.post('http://localhost:5000/api/submit-insurance', formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
