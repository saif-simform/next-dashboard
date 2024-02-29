export const CONFIG = {
    db_dialect: process.env.DB_DIALECT || "mongodb",
    db_host: process.env.DB_HOST || "localhost",
    db_port: process.env.DB_PORT || "27017",
    db_name: process.env.DB_NAME || "admin_dashboard",

}

export const ITEM_PER_PAGE = 2