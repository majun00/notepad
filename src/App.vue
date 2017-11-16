<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import NotesList from './components/NotesList.vue'
import Editor from './components/Editor.vue'
import store form './vuex/store'
import {initStore} from './vuex/actions'

export default {
  components:{
    Toolbar,
    NotesList,
    Editor
  },
  store,
  vuex:{
    action:{
      initStore
    }
  },
  ready(){
    this.initStore()
  }
}
</script>

<style>
  html, #app {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
</style>
