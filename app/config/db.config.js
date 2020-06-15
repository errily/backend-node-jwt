module.exports = {
  HOST: "localhost",
  USER: "erril",
  PASSWORD: "halo",
  DB: "testdb2",
  dialect: "mysql", //bahasa database
  pool: {
    //berapa banyak time request(ke database )
      max: 5, //max 5 orang
      min: 0,
      acquire: 30000, //max time
      idle: 10000//release nampilin data 
    }
}