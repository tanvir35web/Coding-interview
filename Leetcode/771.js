var numJewelsInStones = function(jewels, stones) {
    count = 0;

    for(i=0; i < stones.length; i++) {
        if(jewels.includes(stones[i])){
            count ++;
        }
    }

    return count;
}

console.log(numJewelsInStones(jewels="aA", stones="aAAbbbb"));