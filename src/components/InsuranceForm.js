import React, { useState } from 'react';
import { submitInsuranceData } from '../services/api';
import './InsuranceForm.css';

const InsuranceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    insuranceType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    if (!formData.name || !formData.surname || !formData.insuranceType) {
      alert('Please fill data');
      return;
    }
  
    try {
      const response = await submitInsuranceData(formData);
      console.log('Response:', response); // เพิ่ม log เพื่อดูการตอบกลับ
      alert('Complete!');
      setFormData({ name: '', surname: '', insuranceType: '' });
    } catch (error) {
      console.error('Error details:', error); // เพิ่ม log เพื่อดู error ที่เกิดขึ้น
      alert(`Failed: ${error.message}`);
    }
  };
  
  return (
    <div className="form-container">
      <h2>Insurance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Input"
            required
          />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Input"
            required
          />
        </div>
        <div className="form-group">
          <label>Insurance Type</label>
          <select
            name="insuranceType"
            value={formData.insuranceType}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Health Insurance">Health</option>
            <option value="Car Insurance">Cars</option>
            <option value="Home Insurance">Home</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default InsuranceForm;
