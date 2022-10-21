import { Client, QueryResultRow } from "pg";

export class Postgres {
    constructor(
        private readonly client: Client,
    ) {}
    
    async connect() {
        await this.client.connect();
    }
    
    async disconnect() {
        await this.client.end();
    }
    
    async query<T>(query: string, values: any[] = []): Promise<Array<T & QueryResultRow>> {
        const result = await this.client.query<T & QueryResultRow>(query, values);
        
        return result.rows;
    }
}