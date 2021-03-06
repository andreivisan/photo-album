// folder_index, folder_details, folder_create_get, folder_create_post, folder_delete
const { Folder } = require('../models')

const folder_create_post = async (req, res) => {
    const { name, parent, notes } = req.body;

    try {
        const folder = await Folder.create({ name, parent, notes });
    
        return res.json(folder);
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const folder_index = async (req, res) => {
    try {
       const folders = await Folder.findAll();

       return res.json(folders)
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const folder_details = async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const folder = await Folder.findOne({
            where: { uuid },
            include: 'photos'
        });

        return res.json(folder)
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const folder_delete = async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const folder = await Folder.findOne({ where: { uuid } });

        await folder.destroy();

        return res.json({ message: 'Folder deleted!' })
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const folder_update = async (req, res) => {
    const uuid = req.params.uuid;
    const { name, parent, notes } = req.body;

    try {
        const folder = await Folder.findOne({ where: { uuid } });

        folder.name = name;
        folder.parent = parent;
        folder.notes = notes;

        await folder.save();
        
        return res.json(folder);
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const folder_children = async (req, res) => {
    const uuid = req.params.uuid

    try {
        const folders = await Folder.findAll({ where: { parent: uuid } })

        return res.json(folders)
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

module.exports = {
    folder_create_post,
    folder_index,
    folder_details,
    folder_delete,
    folder_update,
    folder_children
}