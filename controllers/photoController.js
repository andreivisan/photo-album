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

module.exports = {
    photo_create_post,
}