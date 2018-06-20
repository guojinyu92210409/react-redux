export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let nextTodoId = 2001;
export function addTodo(value,e){
    return{
        type: 'ADD_TODO',
        id: nextTodoId++,
        text:value
    }
}

export function toggleTodo(id){
    return{
        type: 'TOGGLE_TODO',
        id
    }
}

//state 初始值
const initialState={
    todos:[
    {id:1001,text:'item1',isSelected:false},
    {id:1002,text:'item2',isSelected:true},
    {id:1003,text:'item3',isSelected:false},
    {id:1004,text:'item4',isSelected:true},
    {id:1005,text:'item5',isSelected:false},
  ]
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
        return Object.assign({}, state, {
            todos: [
                ...state.todos,
                {
                    id: action.id,
                    text: action.text,
                    isSelected: false
                }
            ]
        })

        // return{
        //     ...state,
        //     todos:[...state.todos,
        //         {
        //             id: action.id,
        //             text: action.text,
        //             isSelected: false
        //         }
        //     ]
        // }

        // return{
        //     todos: state.todos.concat([{
        //         id: action.id,
        //         text: action.text,
        //         isSelected: false
        //     }])
        // }
        case 'TOGGLE_TODO':
         return Object.assign({}, state, {
             todos: state.todos.map((todo) => {
                 if (todo.id === action.id) {
                     return Object.assign({}, todo, {
                         isSelected: !todo.isSelected
                     })
                 }
                 return todo
             })
         })
        // return {
        //     ...state,
        //     todos: state.todos.map(item=>item.id === action.id ? { ...item,
        //         isSelected: !item.isSelected
        //     } : item)
        // }
        default:
         return state
    }
}