const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // สำหรับแก้ไข CORS

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // อนุญาตให้เชื่อมต่อจาก Origin ใดก็ได้
app.use(bodyParser.json()); // รองรับ JSON ใน Request Body

// Route สำหรับรับข้อมูลจาก Frontend
app.post('/api/submit-insurance', (req, res) => {
  const { name, surname, insuranceType } = req.body;

  // ตรวจสอบว่าข้อมูลครบถ้วนหรือไม่
  if (!name || !surname || !insuranceType) {
    return res.status(400).json({ error: 'Please fill data' });
  }

  // แสดงข้อมูลใน Console (สำหรับตรวจสอบ)
  console.log('Data from Frontend:', { name, surname, insuranceType });

  // ตอบกลับไปยัง Frontend
  res.status(200).json({
    message: 'Complete!',
    receivedData: { name, surname, insuranceType },
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
