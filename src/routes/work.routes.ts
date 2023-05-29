import { Router } from 'express';
import { v4 } from 'uuid';

const workRoutes = Router();

const work = [];

workRoutes.post("/work", (request, response) => {
    
    const { 
        name, 
        synopsis, 
        releaseYear, 
        director, 
        streamingService_id, 
        coverUrl, 
        duration, 
        ageRating 
    } = request.body;

    const id = v4();

    work.push({
        id,
        name,
        synopsis,
        releaseYear,
        director,
        streamingService_id,
        coverUrl,
        duration,
        ageRating
    });

    return response.status(201).send();

});

workRoutes.get("/work", (request, response)=>{

    return response.status(200).json(work);
});

workRoutes.get("/work/:name", (request, response)=> {

});

export { workRoutes };