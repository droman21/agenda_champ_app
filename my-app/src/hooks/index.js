import {useState, useEffect} from 'react';
import {firebase} from '../firebase';
import moment from 'moment';
import {collatedTasksExist} from '../helpers';


export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);
    
    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', '7dbaf0e0-983c-48f1-a43a-c5f30af5bacd');

        unsubscribe = selectedProject &&  !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
            ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

      unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
            id: task.id,
            ...task.data(),
        }));

        setTasks(
            selectedProject === 'NEXT_7'
            ? newTasks.filter(
                task =>
                    moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                    task.archived !== true
                )
            : newTasks.filter(task => task.archived !== true)
        );

        setArchivedTasks(newTasks.filter(task => task.archived !== false));
      });

      return () => unsubscribe();
    }, [selectedProject]);

    return {tasks, archivedTasks};
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .where('userId', '==', '7dbaf0e0-983c-48f1-a43a-c5f30af5bacd')
        .orderBy('projectId')
        .get()
        .then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId: project.id,
            }));
        });
    }, []);
};