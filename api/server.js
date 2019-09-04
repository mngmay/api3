const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

// manage products (8)
// manage clients (8)
// manage orders (8)
// manage suppliers (8)

server.get("/products", (req, res) => {});

server.get("/clients", (req, res) => {});

server.get("/suppliers", (req, res) => {});

server.get("/orders", (req, res) => {});

module.exports = server;
