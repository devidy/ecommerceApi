module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "DASD7A8S7AS09D8ASD80A98SDA098D0ASASD98",
    api: process.env.NODE_ENV === "production" ? "url da api" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "url da loja" : "http://localhost:8000"
};