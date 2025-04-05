import fs from 'fs';
import path from 'path';
import { initProject } from '../../../utils/fileTemplates';

export const createProjectService = (name: string, template: string): void => {
console.log(name,template)
    initProject(template,name)
};