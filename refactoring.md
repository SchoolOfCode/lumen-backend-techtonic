removed from db index.js 
        - //const { Pool } = require("pg"); --> import { Pool } from "pg";

removed from model resources.js
        - const { query } = require("../db/index.js"); --> import { query } from "../db/index.js";
        - removed   // module.exports = {
                    //   getResources,
                    //   addResource,
                    // };

removed from routes resourceroutes.js
                    const express = require("express") --> import express from "express"
                    const { getResources, addResource } = require("../models/resources.js"); --> import { getResources, addResource } from "../models/resources.js";
                    module.exports = router; --> export default router;

removed from app.js 
                    const express = require("express"); --> import express from "express";
                    const cors = require("cors") --> import cors from "cors";
