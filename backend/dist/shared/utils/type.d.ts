export type ModelAttributes = 'id' | 'createdAt' | 'updatedAt' | 'isActive';
export type ErrorObject = {
    message: string[];
    error: string;
    statusCode: number;
    actualServerError?: any;
};
