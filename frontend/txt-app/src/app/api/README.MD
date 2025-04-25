# API service

Includes all APIs:
- [x] createProject (projectName, template) -> confirmation as text
- [x] openProject (projectName) -> config.json and lastSeen text set file as one json
- [ ] openSet (projectName, setName, fileName) -> set file as json
- [ ] updateSet (projectName, setName, fileName, data) -> confirmation as text
- [ ] getFileListBySet (projectName, setName) -> list as array in json

Question: should user manage singular files or backend should do it itself? Still, somehow user have to let backend know what should be done... but maybe it should be included in updateSet endpoint, not sure yet, and maybe updateSet should be cut to smaller pieces like createSetFile, updateSetFile, readSetFile and deleteSetFile
- [ ] deleteSingularSetFile (projectName, setName, fileName) -> confirmation as text


Planned for extended version as now there is no such features
- [ ] createSet (projectName, setName, setData) -> confirmation 
- [ ] deleteWholeSet (projectName, setName)
- [ ] delete
