import { asyncHandle } from "../utilis/Asynchandler.js";




// export const registeruser = asyncHandle(async (req, res) => {
//     res.status(200).json({
//         message: "User registered successfully",
//         user: req.body
//     })
// })

export const registeruser = asyncHandle(async (req, res) => {
    console.log("Register route hit");
    res.status(200).json({
        message: "User registered successfully",
        user: req.body
    });
});
