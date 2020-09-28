import {useState, useEffect} from 'react';
import {firebase} from '../firebase';
import moment from 'moment';
import {collatedTasksExist} from '../helpers';


export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    
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
    }, []);
};