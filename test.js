const processTasks = (tasks) => { // сделаю функцию стрелочной потому что... мне так нравится
    const completedTasks = [];
    const pendingTasks = [];
    const overdueTasks = [];
    const currentDate = new Date(); // вынесем дату за пределы цикла

    for (const task of tasks) { // Используем for...of вместо for по индексу
        const { status, name, dateCompleted, dueDate } = task; // сделаем деструктуризацию
        
        switch (status) { // для лучшей читаемости switch case
            case 'completed':
                if (!dateCompleted) { task.dateCompleted = currentDate; }
                completedTasks.push(task);
                logTaskStatus(name, 'completed');
                break;
                
            case 'pending':
                if (dueDate && new Date(dueDate) < currentDate) {
                    overdueTasks.push(task);
                    logTaskStatus(name, 'overdue');
                } else {
                    pendingTasks.push(task);
                    logTaskStatus(name, 'pending');
                }
                break;
                
            case 'canceled':
                logTaskStatus(name, 'canceled');
                break;
                
            default:
                logTaskStatus(name, 'unknown status');
        }
    }

    return { completed: completedTasks, pending: pendingTasks, overdue: overdueTasks };
}

// Повторяющийся код лучше вынести в отдельную функцию
const logTaskStatus = (taskName, status) => {
    console.log(`Task ${taskName} is ${status}`);
}