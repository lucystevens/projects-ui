import Project, { ProjectGroup } from "./Project"

/**
 * Static config class to provide data until BE API is finished
 */

export class Config {
    private projectGroups: ProjectGroup[] = [];
    private projectsByName: Map<String, Project> = new Map()

    constructor(data: ProjectGroup[]){
        this.projectGroups = data;
        data.forEach( pg => 
            pg.projects.forEach( p =>
                this.projectsByName.set(p.name, p)))
    }

    getProjectGroups() : ProjectGroup[] {
        return this.projectGroups;
    }

    getProjectByName(name: String): Project | undefined {
        return this.projectsByName.get(name)
    }
} 

export const config: Config = new Config([
    {
        id: 1,
        name: "Core Libraries",
        description: "A set of core libraries for building APIs and services",
        projects: [
            {
                id: 1, 
                name: "base-lib",
                repo: "lukecmstevens/base-lib",
                description: "base-lib is a base library for a number of libraries and applications under the uk.co.lukestevens group. It contains interfaces, annotations, and utilities for use by other libraries.",
                currentVersion: "v2.1.0"
            },
            {
                id: 2, 
                name: "db-lib",
                repo: "lukecmstevens/db-lib",
                description: "db-lib is a library for managing database connections and ORM using Hibernate",
                currentVersion: "v2.0.0"
            },
            {
                id: 3, 
                name: "config-lib",
                repo: "lukecmstevens/config-lib",
                description: "config-lib is a configuration library for fetching properties from various sources",
                currentVersion: "v2.0.0"
            },
            {
                id: 4, 
                name: "logging-lib",
                repo: "lukecmstevens/logging-lib",
                description: "logging-lib is a library for managing application logging to various sources.",
                currentVersion: "v2.0.0"
            },
            {
                id: 5, 
                name: "server-lib",
                repo: "lukecmstevens/server-lib",
                description: "server-lib is a Java library for reducing the boilerplate required for API services, allowing them to be built quickly, in a standardised fashion. The server layer itself is managed by Spark.",
                currentVersion: "v2.0.0"
            }
        ]
    },
    {
        id: 2,
        name: "Other projects",
        description: "All my other misc. projects from quidditch websites, to geoguessr slack bots",
        projects: [
            {
                id: 6, 
                name: "geoguessr-bot",
                repo: "lukecmstevens/geoguessr-bot",
                description: "Simple geoguessr bot for posting challenges to a slack workspace",
                currentVersion: "v0.1.0"
            },
            {
                id: 7, 
                name: "quidditch-scotland",
                repo: "lukecmstevens/quidditch-scotland",
                description: "Repository for the Scottish national team website, hosted using github pages",
                currentVersion: "v1.0.0"
            },
            {
                id: 8, 
                name: "actions",
                repo: "lukecmstevens/actions",
                description: "A repo for storing reusable GitHub actions",
                currentVersion: "v1"
            },
            {
                id: 9, 
                name: "The Art of the Heist",
                repo: "lukecmstevens/The-Art-of-the-Heist",
                description: "The Art of the Heist is a top-down heist game built in 5 days with zero prior game development knowledge! Steal art and don't get caught!",
                currentVersion: "v0.1"
            }
        ]
    }
])
