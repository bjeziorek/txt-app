# API project

## endpionts
- [x] create controller
- [x] create service's logic
- [x] read controller
- [ ] read service's logic
- [ ] backend unit tests
- [ ] safety mechanisms (like handling typos in template name or misiing definitions of templates, prefereably on program start, frontend should receive list of possible definitions, maybe by project/controllers/init.controller.ts etc.)

### Create
This endpoint works and handles any template. 
It expects payload:
{
    projectName: string,
    template: string | enum
}

### Read
The enpoint itself works and sends to frontend data, but it's still test data, it requires preparing data yet, maybe editing payload.
It expects payload:
{
    projectName: string
}