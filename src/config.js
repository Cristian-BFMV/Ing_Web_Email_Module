import { config } from 'dotenv'

config();

export default {
    SENDGRID_API_KEY: process.env.SENGRID_API_KEY,
    NEW_EMPLOYEE_TEMPLATE_ID: process.env.NEW_EMPLOYEE_TEMPLATE_ID,
    SERVER_PORT: process.env.SERVER_PORT,
}