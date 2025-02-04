const router = require ("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userAuth");

//add book to favourite
router.put("/add-book-to-favourites", authenticateToken, async (req,res)=> {
    try {
        const {bookid, id} = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if(isBookFavourite){
            return res.status(200).json({message: "Book is already in Favourites"});
        }
        await User.findByIdAndUpdate(id,{$push:{favourites: bookid}});
        return res.status(200).json({message: "Book is added to Favourites"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
});
//remove from favourites
router.put("/remove-book-from-favourites", authenticateToken, async (req,res)=> {
    try {
        const {bookid, id} = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if(isBookFavourite){
            await User.findByIdAndUpdate(id,{$pull:{favourites: bookid}});
        }
        return res.status(200).json({message: "Book is removed from Favourites"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
});
//get favourite books of perticular user
router.get("/get-favourite-books", authenticateToken, async (req,res)=> {
    try {
        const {id} = req.headers;
        const userData = await User.findById(id).populate("favourites");
        const favouriteBooks = userData.favourites;
        return res.json({
            status: "Success",
            data: favouriteBooks,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "An error occured"});
    }
});
module.exports = router;