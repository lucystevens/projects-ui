import axios from "axios";
import { config } from "models/Config";
import Project, { ProjectGroup } from "models/Project";
import ServerResponse from "models/ServerResponse";
import { useEffect, useState } from "react";


export const useRepoMarkdown = (repo: string) => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<ServerResponse<string>>();
   
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/${repo}/main/README.md`)
        .then(({ data }) => {
            setData({success: true, data: data})
        })
        .catch((e) => {
            setData({success: false, errors: { default: e }})
        })
        .finally(() => {
            setLoading(false);
        });
    }, [repo]);
   
    return [{ data, isLoading }];
}

export const useProjectGroups = () => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<ServerResponse<ProjectGroup[]>>();
   
    useEffect(() => {
        setData({success: true, data: config.getProjectGroups() })
        setLoading(false);
    }, []);
   
    return [{ data, isLoading }];
}

export const useProject = (name: string) => {

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<ServerResponse<Project>>();
   
    useEffect(() => {
        setData({success: true, data: config.getProjectByName(name) })
        setLoading(false);
    }, [name]);
   
    return [{ data, isLoading }];
}