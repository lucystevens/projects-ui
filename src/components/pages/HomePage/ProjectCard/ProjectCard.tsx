import React from 'react'
import { Chip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Project from 'models/Project';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./ProjectCard.css";

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {

    return (
        <Card>
        <CardContent>
          <Typography variant="h3" component="h3">
            {project.name}
          </Typography>
          <Chip className="version-chip" label={project.currentVersion} color="primary"/>
          <Typography variant="body2" component="p">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
            <Button 
                role="link" 
                size="small" 
                href={`https://github.com/${project.repo}`} 
                target="_blank" 
                endIcon={<GitHubIcon />}>View on GitHub
            </Button>
        </CardActions>
      </Card>
    );

};

export default ProjectCard;