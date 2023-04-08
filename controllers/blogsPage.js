const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogs = await BlogPost.find({}).limit(40).sort({_id: -1}).populate('userid');

    res.render('blogs', {
        title: "View Democracy & Dissent Articles",
        blogs
    })
}