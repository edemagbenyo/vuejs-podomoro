import {firestoreAction} from 'vuexfire'
import db from './db'

export default {
  bindConfigRef: firestoreAction(context => {
    // context contains all original properties like commit, state, etc
    // and adds `bindFirestoreRef` and `unbindFirestoreRef`
    // we return the promise returned by `bindFirestoreRef` that will
    // resolve once data is ready
    return context.bindFirestoreRef('config', db.collection('configuration').doc('K3OmTaJ161hvhW8PaCgV'))
  }),
  setWorkingPodomoro ({ commit }, workingPodomoro) {
    if (workingPodomoro) {
    //   commit('setWorkingPodomoro', parseInt(workingPodomoro, 10))
    db.collection('configuration')
    .doc('K3OmTaJ161hvhW8PaCgV')
    .update({ workingPodomoro:parseInt(workingPodomoro) })
    .then(() => {
    console.log('user updated!')
    })
    }
  },
  setShortBreak ({ commit }, shortBreak) {
    if (shortBreak) {
      commit('setShortBreak', parseInt(shortBreak, 10))
    }
  },
  setLongBreak ({ commit }, longBreak) {
    if (longBreak) {
      commit('setLongBreak', parseInt(longBreak, 10))
    }
  }
}
