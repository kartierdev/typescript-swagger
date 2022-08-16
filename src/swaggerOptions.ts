export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Tasks Api", 
            version: "0.0.1",
            description: "A simple Api"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ['./src/routes/*ts']
}