const corsConfig = {
    origin: ['http://localhost:5173'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
};

export default corsConfig