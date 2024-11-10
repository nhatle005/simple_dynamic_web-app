const bmiModel = require('../models/bmi');

const calculateBMI = (req, res) => {
    const { height, weight } = req.body;
    const bmi = bmiModel.calculateBMI(height, weight);
    const category = bmiModel.classifyBMI(bmi);
    res.json({ bmi, category });
};

module.exports = { calculateBMI };