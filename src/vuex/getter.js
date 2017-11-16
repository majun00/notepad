//从store获取数据

//获取过滤后的noteList
export const filteredNotes=(state)=>{
	if(state.show==='all'){
		return state.notes||{}
	}else if(state.show=='favorite'){
		return state.notes.filter(note=>note.favorite)||{})
	}
}

//获取列表展示状态
export const show=(state)=>{
	return state.show;
}

//获取当前激活
export const activeNote=(state)=>{
	return state.activeNote
}