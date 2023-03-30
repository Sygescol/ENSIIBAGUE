import mysql from "mysql2";

// año actual
const year = new Date().getFullYear();

const WebMaster = mysql.createPool({
  host: "sistemasivhorsnet.com",
  user: "ensiibag_webmast",
  password: "Webmaster_Ensiibague2020$",
  port: 3306,
  database: "ensiibag_portal_laravel_2020",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

const Sygescol = mysql.createPool({
  host: "sistemasivhorsnet.com",
  user: "ensiibag_noribag",
  password: "xiT=(l+b7k1f",
  port: 3306,
  database: `ensiibag_sygescol${year}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

const WebMasterPool = WebMaster.promise();
const SygescolPool = Sygescol.promise();

export { WebMasterPool, SygescolPool };
