import axios from "axios";


//66b3395960a208ee1fdc6cd8
export function AddNote(title, apiKey = "66b3395960a208ee1fdc6cd8") {
    axios.post('https://todos.routemisr.com/api/v1/todos',
        {
            title,
            apiKey
        })
        .then(({ data }) => {
            if (data?.message == 'success')
                GetNotes()
        })
        .catch(err => console.log(err))

}


export async function GetNotes(id = "66b3395960a208ee1fdc6cd8") {
    let { data } = await axios.get(`https://todos.routemisr.com/api/v1/todos/${id}`)
    return data?.todos

}
export async function DeleteNotes(todoId) {

    await fetch(`https://todos.routemisr.com/api/v1/todos`,
        {
            method: 'DELETE',
            body: JSON.stringify({ todoId }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

    )
}
export async function updateNotes(todoId) {

    let { data } = await axios.put(`https://todos.routemisr.com/api/v1/todos`,{
        todoId
        })
    // return data?.todos
    console.log(data);
    
}