import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

/**
 * @param {string} query - SQL 쿼리 (파라미터는 $1, $2 ... 형식)
 * @param {Array} params - 파라미터 배열
 */
const executeQuery = async (query, params = []) => {
    try {
        const result = await sql.query(query, params);
        return result;
    } catch (e) {
        console.error('Error in executeQuery:', e);
        throw e;
    }
};

module.exports = { executeQuery };
