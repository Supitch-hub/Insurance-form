import axios from 'axios';

export const submitInsuranceData = async (formData) => {
  const response = await axios.post('https://4449-147-50-77-20.ngrok-free.app/api/submit-insurance', formData, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify()
  });
  return response.data;
};

