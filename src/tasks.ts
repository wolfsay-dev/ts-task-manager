import si from 'systeminformation'

async function getTasks() {

    try  {
    const data = await si.processes();

    return {
        total: data.all,
        running: data.running,
        sleeping: data.sleeping,
        list: data.list
    
    };

    } catch (error) {

        console.log(`Une erreur innatendue s'est produite :/`, error);
        
    }
}


export const tasks = await getTasks();

