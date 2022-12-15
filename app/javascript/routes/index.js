import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup } from "../pages/Home";
import {
  Dashboard,
  Balance,
  Account,
  Credits,
  MoneyTransfer,
} from "../pages/Main";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/account" element={<Account />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/moneytransfer" element={<MoneyTransfer />} />
    </Routes>
  </Router>
);
