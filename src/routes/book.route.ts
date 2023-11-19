import { Router } from "express";
import BookController from "../controllers/book.controller";
import { newbookBodyValidate, updateBookValidate } from "../middlewares/validateBody";
import { jwtGuard } from "../middlewares/jwtGuard";

const router = Router();

router.get("/:book_id", [jwtGuard], BookController.getBook);
router.post("/new", [jwtGuard, newbookBodyValidate], BookController.addBook);
router.patch("/:book_id", [jwtGuard,updateBookValidate],BookController.updateBook);
router.delete("/:book_id",[jwtGuard], BookController.deleteBook);

export default router;
