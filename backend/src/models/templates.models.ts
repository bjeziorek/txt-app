import { TemplatesEnum } from "../utils/templateResolver";

export const TEMPLATE_VERSION="0.1";

export type ConfigCotentType = {
    project_name: string,
    template_version: string,
    sets: string[],
    template: TemplatesEnum,
    last_seen: string[]
}