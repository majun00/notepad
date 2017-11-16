import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
	notes=[],
	activeNote:{},
	show:''
}

const mutation={
	//初始化state
	INIT_STORE(state,data){
		state.notes=data.notes;
		state.show=data.show;
		state.activeNote=data.activeNote;
	},
	//新增笔记
	NEW_NOTE(state){
		var newNote={
			id:_new Date(),
			title:'',
			content:'',
			favorite:false
		};
		state.notes.push(newNote);
		state.activeNote=newNote;
	},
	//修改笔记
	EDIT_NOTE(state,note){
		state.activeNote=note;
		for (var i = 0; i < state.notes.length; i++) {
			if(state.notes[i].id==note.id){
				state.notes[i]=note;
				break;
			}
		}
	},
	//删除笔记
	DELET_NOTE(state){
		state.notes.$remove(state.activeNote);
		state.activeNote=state.notes[0]||{}
	},
	//切换笔记收藏
	TOGGLE_FAVORITE(state){
		state.activeNote.favorite=!state.activeNote.favorite;
	},
	//切换显示类型?
	SET_SHOW_ALL(state,show){
		state.show=show;
		if(show==='favorite'){
			state.activeNote=state.notes.filters(note=>note.favorite)[0]||{}
		}else{
			state.activeNote=state.notes[0]||{}
		}
	},
	//设置当前激活笔记
	SET_ACTIVE_NOTE(state,note){
		state.activeNote=note;
	}
}

export default new Vuex.Store({
	state,
	mutations
})