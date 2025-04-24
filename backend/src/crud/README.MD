# CRUD
In this folder are groupped methods for saving and reading files (maybe in future also for deleting).

## crud.ts
crud.ts file is set of abstracted methods for saving and reading files. It gets as argument what kind of file will be read/writen. 

crud.ts will be able also to create project and read it.

## crud methods
### singular files
- [ ] save any singular file
- [ ] read any singular file
- [ ] create any singular file
- [ ] delete any singular file
### set of files / specialistic files
- [ ] create set of files (ex. new set + index files)
- [ ] update index file (maybe it will be update set, maybe as singular method)
- [ ] delete set
### zipping
- [ ] zip any kind of project (custom, odt, doc etc)
- [ ] unzip any kind of project
### project files
- [ ] create project
- [ ] read project
### import/export
- [ ] import any project
- [ ] export any project

### Current state
At the moment it will be usually json file. But experimentally there are already implemented mechamism for reading xml (only reading) and reading/saving text (txt).

Maybe in future this files will be cut to few files - separated file for operations on singular files, separated for import/export, etc...

### Future plans
- xml - Experimental mechanism for reading xml will be used for import/export odt and doc files.
- database - In case when indexed jsons will be too slow for big data, there are plans for using embedded database, probably SQLite.
- zip - For reading/saving doc and odt will be required zipping and unzipping mechanism. It will be required also for json format, at the moment there is no zipping mechanism, application works of loose files groupooed in project's catalogues.

## other files
Other files should reflect all methods mentioned above with implementation for specific formats like json, xml, etc.

### Current state
At the moment there is experimental parser for xml -> json -> txt format. It won't be used at the moment, can be handy when it comes to import/export operations.
At the moment only file is crudJson where will be groupped necessary implementations for abstracted methods in crud.ts. At the moment as it is only one format, it's embedded in crud.ts methods yet but should be moved in near future.

### Architecture
Maybe in future crudFormat.ts files will be cut to more, if they will become too crowded. There is not decided yet if they should be groupped by function like read.ts and there only read method for all formats or format.ts and there all methods for only one format. The latter seems to be more modular and sounds like a better option.