import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import { useProjectGroups } from 'hooks/ProjectService/ProjectHooks';
import ProjectCard from './ProjectCard/ProjectCard';
import "./HomePage.css";

const HomePage: React.FC = () => {

    const [{data, isLoading}] = useProjectGroups();

    return (
        <>
        {!isLoading && data?.success &&
            data.data?.map( projectGroup => 
                <>
                    <Box className="info" p={2}>
                        <Typography variant="h2" component="h2">
                            {projectGroup.name}
                        </Typography>
                        <Typography variant="h5" component="h5">
                            {projectGroup.description}
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        { projectGroup.projects.map(project => 
                            <Grid item xs={12} md={6} lg={4}>
                                <ProjectCard key={project.id} project={project}></ProjectCard>
                            </Grid>
                        )}
                    </Grid>
                    <hr className="bottom-line"/>
                </>
            )
        }
        </>
    );

};

export default HomePage;