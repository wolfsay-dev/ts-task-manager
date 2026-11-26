import { tasks } from './tasks.js';
import { secret } from '../secret.js'
const log = console.log

const argv = process.argv.slice(1)

if (argv[1] === 'search') {
    if(argv[2]) {
        try {
            
          const pid = argv[2]

         const task = tasks?.list.find(task => `${task.pid}` === pid)
         if (task) {
        log(`Le processus de PID ${pid} se nomme ${task?.name} et est actuellent d'état ${task?.state} `)
         } else {
            log(`Le PID n'est pas valide`)
         }
        } catch (e) {
            log(`Une erreur s'est produite`, e)
        }

    } else {
        log(`Merci de renseigner une PID valide`)
    }
}

if (argv[1] === 'list') {

    const list = tasks?.list.map((task) => task.pid)

    log(list)
}

if (argv[1] === 'kill' && argv[2] && argv[3] === secret.key) {

    try {

        process.kill(Number(argv[2]))
        log(`Processus arrêté avec succès`)

    } catch (e) {
        log('Impossible d\'arrêter ce processus', e)
    }


}