import * as Types from './mutation-types';
const mutations={
    [Types.ADD](state){
        state.count++
    },
    [Types.MINUS](state){
        state.count-=1;
    }
}
export default mutations;