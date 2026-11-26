import si from 'systeminformation'

async function getTasks() {

    try  {
    const data = await si.processes();

    return {
        total: data.all,
        running: data.running,
        sleeping: data.sleeping,
        pids: data.list.map(task => task.pid)

    };

    } catch (error) {

        console.log(`Une erreur innatendue s'est produite :/`, error);
        
    }
}


export const tasks = await getTasks();

