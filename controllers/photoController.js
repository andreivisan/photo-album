const { Photo, Folder } = require('../models')

const photo_create_post = async (req, res) => {
    const { folderUuid, name, path, camera, file_size, resolution, notes } = req.body;

    try {
        const folder = await Folder.findOne({where: {uuid: folderUuid}});

        const photo = await Photo.create({ 
            name, 
            path,
            camera,
            file_size,
            resolution, 
            notes,
            folder_id: folder.id
        });
    
        return res.json(photo);
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const photo_index = async (req, res) => {
    try {
       const photos = await Photo.findAll();
       
       return res.json(photos)
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const photo_details = async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const photo = await Photo.findOne({
            where: { uuid },
        });

        return res.json(photo);
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const photo_delete = async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const photo = await Photo.findOne({ where: { uuid } });

        await photo.destroy();

        return res.json({ message: 'Folder deleted!' })
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

const photo_update = async (req, res) => {
    const uuid = req.params.uuid;
    const { name, path, camera, file_size, resolution, notes } = req.body;

    try {
        const photo = await Photo.findOne({ where: { uuid } });

        photo.name = name;
        photo.path = path;
        photo.camera = camera;
        photo.file_size = file_size;
        photo.resolution = resolution;
        photo.notes = notes;

        await photo.save();
        
        return res.json(photo);
    } catch (error) {
        console.log(error);

        return res.status(500).json(error);
    }
}

module.exports = {
    photo_create_post,
    photo_index,
    photo_details,
    photo_delete,
    photo_update
}