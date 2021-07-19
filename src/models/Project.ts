export default interface Project {
    id: number,
    name: string,
    description: string,
    repo: string,
    currentVersion: string
}

export interface ProjectGroup {
    id: number,
    name: string,
    description: string,
    projects: Project[]
}