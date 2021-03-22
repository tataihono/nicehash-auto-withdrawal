require("dotenv").config();
const { default: NiceHash } = require("nicehash-api");

async function main() {
  try {
    const instance = new NiceHash({
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      api_id: process.env.API_ID,
    });
    await instance.testAuthorization();
    const balance = await instance.getBalance();
    if (balance > 0.001) {
      instance.createWithdrawlRequest(
        process.env.WITHDRAWAL_ID,
        balance,
        "BTC"
      );
    }
  } catch (error) {
    console.error(error);
  }
}

main();
