const { DatabaseSync } = require('node:sqlite');

const db = new DatabaseSync('hgi-hub.sqlite');

for (const table of ['users', 'orders', 'sell_orders', 'transactions']) {
  console.log(`\n===== ${table} =====`);
  const columns = db.prepare(`PRAGMA table_info(${table})`).all();
  console.log(JSON.stringify(columns, null, 2));

  const count = db.prepare(`SELECT COUNT(*) AS count FROM ${table}`).get();
  console.log(`JUMLAH DATA: ${count.count}`);
}
