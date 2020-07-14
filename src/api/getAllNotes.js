import { client, q } from '../config/db'

const getAllNotes = client.query(
    q.Paginate(
        q.Match(
            q.Ref('indexes/all_notes')))
)
    .then(response => {
        const notesRefs = response.data
        //create new query out of notes refs
        
        const getAllProductDataQuery = noteRefs.map((ref) => {
            return q.Get(ref)
        })
        //query the refs
        return client.query(getAllProductDataQuery).then((data) => data)
    })
    .catch(error => console.warn('error', error.message))

export default getAllNotes;
