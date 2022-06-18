import { ref } from 'vue'

const getFolderChildren = (uuid) => {
    const subFolders = ref([])
    const error = ref(null)
    
    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/folders/children/' + uuid, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            })

            if (!data.ok) {
                throw Error("No data available!")
            }
            subFolders.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { subFolders, error, load }
}

export default getFolderChildren