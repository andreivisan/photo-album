import { ref } from 'vue'

const getFolders = () => {
    const folders = ref([])
    const error = ref(null) 

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/folders', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            })
            if (!data.ok) {
                throw Error("No data available!")
            }
            folders.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    
    return { folders, error, load }
}

export default getFolders