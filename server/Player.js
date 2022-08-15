export class Player{
    constructor(id){
        this.id=id;
    }

    /**
     * @param {Array} matchGreen
     */
    set MatchGreen(matchGreen){
        this.matchGreen = matchGreen;
    }

    /**
     * @param {any} matchBlack
     */
    set MatchBlack(matchBlack){
        this.matchBlack = matchBlack;
    }

    /**
     * @param {any} matchGtoB
     */
    set MatchGtoB(matchGtoB){
        this.matchGtoB = matchGtoB;
    }

    /**
     * @param {any} matchBtoG
     */
    set MatchBtoG(matchBtoG){
        this.matchBtoG = matchBtoG;
    }

    /**
     * @param {any} green
     */
    set Green(green){
        this.green = green;
    }

    /**
     * @param {any} black
     */
    set Black(black){
        this.black = black;
    }

    get AllBlack(){
        var ret = [this.matchBtoG]
        ret.push(this.black);
        ret.push(this.matchBlack);
        ret.sort((a, b) => a - b)
        return ret;
    }
    get AllGreen(){
        var ret = this.matchGreen
        ret=ret.concat(this.green)
        ret.push(this.matchGtoB)
        ret.sort((a, b) => a - b)
        return ret;
    }
}