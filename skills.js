function PotAtq(base,turn) {
    let ataq = 0;
    if (turn ===1) {
        return ataq = base*(base*0.3);
    }
    else {
        return ataq-1;
    }
}
function ifLifeis50(life,lifetot,ataq) {
    if (life ===lifetot*(lifetot*0.5)) {
        return ataq+70;
    }
}
function Heal50Rival(damage,life) {
     return life+(damage*0.5);
}
function KissRival(turn) {
if (turn ===1) {
    return SkillOFF = true;
}
}
function Same(callback) {
    return callback();
}
function paramUp(param,percentaje) {
    return param+(param*percentaje);
}
function paramDown(param,percentaje) {
    return param-(param*percentaje);
}
function params20(ataq,defense,speed) {
    paramUp(ataq,0.2);
    paramUp(defense,0.2);
    paramUp(speed,0.2);
}
function Burnt(life,turn) {
        return life-2;
}
function param10 (ataq) {
    paramUp(ataq,0.1);
}
function lifeisBeyond(life,Oplife,defense) {
    if (life <Oplife) {
        paramUp(defense,0.3);
    }
}
function AtqUpandDefenseDown(ataq,defense) {
    paramUp(ataq,0.3);
    paramDown(defense,0.1);
}
function DamageperLife(ataq,life,turn) {
life = paramDown(life,0.05)
}
module.exports = {PotAtq,ifLifeis50,Heal50Rival,KissRival,Same,params20,param10,lifeisBeyond,AtqUpandDefenseDown};