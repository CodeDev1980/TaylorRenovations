const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
    const articles = await BlogPost.find({}).limit(3).sort({_id: -1}).populate('userid');
    res.render('index', {
        title: "Chris Taylor - Before you sell, renovate your home with us.",
        articles
    })
}