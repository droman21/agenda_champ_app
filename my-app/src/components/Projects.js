import React from 'react';
import { useProjectsValue } from '../context';
import { useSelectedProjectValue } from '../context/selected-project-context';



export const Projects = ({ activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projets &&
        projects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={
                    active === project.projectId
                        ? 'active sidebar__project'
                        : 'sidebar__project'
                }
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                I am a project
            </li>
        ))
    )
}