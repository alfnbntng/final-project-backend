import express from "express"; 
import {
    addBorrows,
    getAllBorrows,
    getOneBorrows,
    updateBorrows,
    deleteBorrows,
} from "../controllers/borrowController.js";

const router = express.Router();

router.get("/", getAllBorrows);
router.post("/", addBorrows);
router.get("/:id", getOneBorrows);
router.put("/:id", updateBorrows);
router.delete("/:id", deleteBorrows);

export default router;