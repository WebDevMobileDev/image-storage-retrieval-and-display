//COMMENT: Custom types file

//COMMENT: attributes common to all models
export type ModelAttributes = 'id' | 'createdAt' | 'updatedAt' | 'isActive';

//COMMENT: Shape of returned errors matching how most error handlers return errors, Use this when return an error to ensure the frontend knows the shape to expect
export type ErrorObject = {
  message: string[];
  error: string;
  statusCode: number;
  actualServerError?: any;
  // serverMessage?: string
};
