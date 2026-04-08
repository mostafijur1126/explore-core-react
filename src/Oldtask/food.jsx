export default function food({hungry, isHungry}){
    if(isHungry === true){
        return <li>Done:{hungry}</li>
    }else{
        return <li>pending: {hungry}</li>
    }
}