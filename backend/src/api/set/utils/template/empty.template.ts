type EmptyTemplate = {
    sets: string[],
}


export function generateEmptyTemplate(){
    return {
        sets: ['text'],
        setsContent: function generateSetsContent(){
            this.sets.forEach(set=>{
                // todo
            })
        }
    }
}