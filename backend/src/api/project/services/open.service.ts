import fs from 'fs';
import path from 'path';
import { openProject } from '../../../utils/fileTemplates';

export const openProjectService = (name: string) => {
   return openProject(name)
};