import { Router } from "express";
import {registeruser} from "../controllers/user.controllers.js";

const router = Router()


router.route("/registe",registeruser).post(registeruser);


export default router;