// folder_index, folder_details, folder_create_get, folder_create_post, folder_delete
const { Folder } = require('../models')

const folder_create_post = async (req, res) => {
    const { name, parent, notes } = req.body;

    try {
        const folder = await Folder.create({ name, parent, notes });
    
        return res.json(folder);
    } catch (err) {
        console.log(err);

        return res.status(500).json(err);
    }
}

module.exports = {
    folder_create_post
}