import axios from 'axios';

export const submitInsuranceData = async (formData) => {
  const response = await axios.post('http://localhost:5000/api/submit-insurance', formData, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify()
  });
  return response.data;
};
