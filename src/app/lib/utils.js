import mongoose from 'mongoose'
import { CONFIG } from './config'

export const connectToDB = async () => {
    const db_url = `${CONFIG.db_dialect}://${CONFIG.db_host}:${CONFIG.db_port}/${CONFIG.db_name}`
    const connection = {}

    try {
        if (connection.isConnected) return

        const db = await mongoose.connect(db_url)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        throw new Error(error)
    }
}