import faunadb from 'faunadb'

const client = new faunadb.client({secret: process.env.REACT_APP_FAUNADB_KEY })

const q = faunadb.query

export { client , q }
