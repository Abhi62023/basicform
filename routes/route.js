import express from 'express';
import User from '../modal/User.js';
const route = express.Router();

route.post('/api/submit', async (req, res) => {
  const { name, email } = req.body;

  // Create a new document and save it to the database using async/await
  try {
    const formData = new User({ name, email });
    await formData.save();
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving data' });
  }
});

export default route;
