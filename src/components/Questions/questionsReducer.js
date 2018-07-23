export const TOGGLE_CLICK = 'TOGGLE_CLICK'

export function toggleClick(questionIndex, answerIndex, isSingle) {
    return {
        type: 'TOGGLE_CLICK',
        questionIndex,
        answerIndex,
        isSingle
    }
}

//state 初始值
const initialState={
    datas:[
    {
        id: 1,
        index: 0,
        isSingle:1,
        question:'你知道今天星期几吗？',
        options: [{
            id:1001,
            label: 'A',
            content: '今天是星期一',
            isSelected: false
        }, {
            id: 1002,
            label: 'B',
            content: '今天是星期二',
            isSelected: false
        }, {
            id: 1003,
            label: 'C',
            content: '今天是星期三',
            isSelected: false
        }, {
            id: 1004,
            label: 'D',
            content: '今天是星期四',
            isSelected: false
        }]
    },
    {
        id: 2,
        index: 1,
        isSingle: 0,
        question: '你知道明天星期几吗？',
        options: [{
            id: 2001,
            label: 'A',
            content: '明天是星期一',
            isSelected: false
        }, {
            id: 2002,
            label: 'B',
            content: '明天是星期二',
            isSelected: false
        }, {
            id: 2003,
            label: 'C',
            content: '明天是星期三',
            isSelected: false
        }, {
            id: 2004,
            label: 'D',
            content: '明天是星期四',
            isSelected: false
        }, {
            id: 2005,
            label: 'E',
            content: '明天是星期五',
            isSelected: false
        }]
    }
  ]
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_CLICK':
            let datas = JSON.parse(JSON.stringify(state.datas))
            if(action.isSingle){
                datas[action.questionIndex].options.map(item=>{
                    item.isSelected=false
                })
            }
            datas[action.questionIndex].options[action.answerIndex].isSelected = !datas[action.questionIndex].options[action.answerIndex].isSelected
            return{
                ...state,
                datas:datas
            }
        default:
            return state
    }
}