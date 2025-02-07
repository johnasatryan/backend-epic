require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const Account = require('./models/account');

const app = express();
app.use(express.json());

app.post('/transfer', async (req, res) => {
  const { fromId, toId, amount } = req.body;
  const transaction = await sequelize.transaction();

  try {
    const sender = await Account.findByPk(fromId, { transaction });
    const receiver = await Account.findByPk(toId, { transaction });

    if (!sender || !receiver) {
      throw new Error('Account not found');
    }

    if (sender.balance < amount) {
      throw new Error('Insufficient balance');
    }

    await sender.update({ balance: sender.balance - amount }, { transaction });
    await receiver.update(
      { balance: receiver.balance + amount },
      { transaction }
    );

    await transaction.commit();
    res.json({ message: 'Transfer successful' });
  } catch (error) {
    await transaction.rollback();
    res.status(400).json({ error: error.message });
  }
});

app.post('/withdraw', async (req, res) => {
  const { accountId, amount } = req.body;
  const transaction = await sequelize.transaction({
    isolationLevel: sequelize.Transaction.ISOLATION_LEVELS.REPEATABLE_READ,
  });

  try {
    const account = await Account.findByPk(accountId, { transaction });

    if (!account) {
      throw new Error('Account not found');
    }

    if (account.balance < amount) {
      throw new Error('Insufficient funds');
    }

    await account.update(
      { balance: account.balance - amount },
      { transaction }
    );
    await transaction.commit();
    res.json({ message: 'Withdrawal successful' });
  } catch (error) {
    await transaction.rollback();
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
