const User = require("../models/User");

const makePayment = async (req, res, next) => {
  const id = req.body.id;
  const amount = req.body.amount;
  const creditCardNo = req.body.creditCardNo;
  const expDate = req.body.expDate;
  const cvv = req.body.cvv;
  const accTo = req.body.accTo;

  if (!(id && amount && creditCardNo && expDate && cvv && accTo))
    return res.sendStatus(400);

  const user = await User.findOne({ id: id });
  if (!user) return res.sendStatus(400);

  return res.status(200).json({ message: "Payment completed" });
};

module.exports = makePayment;
