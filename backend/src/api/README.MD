# API

## Architecture
Here is described rough architecture, while in every folder is dedicated README.MD with detailed use of its components.

### Every folder have to include the following:
- catalogue controllers
- catalogue services
- routes.ts

### Optional catalogues and files
- utils
- data

## Routes
In app.ts are listed all used routes, from there backend application know where to redirect api request. For example:
```js
app.use('/data/project', projectRoutes);
```
app.ts calls given route.ts where are listed possible routes for this api, for example:
```js
router.post('/create', createProjectController);
```
route.ts is the place where are called controllers.

## Controllers
Controller is a place where request from frontend is handled. It means that's the place where server confirms to frontend that the request has finished successfully or with error and is responsible for sending response to the frontend.
For examples given above controller called by api/project/router.ts (there is many such router.ts files, one for every api - here for project) is api.project/create.controller.ts.
And handling request is the only thing that the controller do and should do. To know the result, controller have to run some code like saving file, but it doesn't contains its code and shouldn't do. It calls the code from service. For example:
```js
await createProjectService(name, template);
```

## Services
Service is logic used by controller, other than handling the request, for example saving file. Sevice doesn't need to keep all logic, it should be simple, clear and preferably abstract. It often will be using utils for crud operations and logically groupped specialistic operations which can bee keep in its api utils or outside of api.

## Current state
At the moment I have 2 catalogues for custom file format (based on indexed json), probably in future they should be grouped in dedicated catalogue. At the moment there are only 3 catalogues: project, set and translation and before alpha there probably won't be more of them before closing this phase.


## Future refinement
At the moment some api contains its utils, other use external (outside the api catalogue) utils. It requires refining arechitectire to make it unified on this field, but at the moment let it be mixed.