function CreateRandomConfig () {
	
}
function SetFirstAndSecondShips () {
    toggler1 = randint(0, 3)
    toggler2 = toggler1
    while (toggler2 == toggler1) {
        toggler2 = randint(0, 3)
    }
    if (toggler1 == 3) {
        HiddenScr[0][randint(0, 3)] = 1
        if (toggler2 == 2) {
            HiddenScr[randint(2, 3)][0] = 1
        } else if (toggler2 == 0) {
            HiddenScr[randint(2, 3)][4] = 1
        } else {
            HiddenScr[4][randint(0, 3)] = 1
        }
    } else if (toggler1 == 2) {
        HiddenScr[randint(0, 3)][0] = 1
        if (toggler2 == 3) {
            HiddenScr[0][randint(2, 3)] = 1
        } else if (toggler2 == 1) {
            HiddenScr[4][randint(2, 3)] = 1
        } else {
            HiddenScr[randint(0, 3)][4] = 1
        }
    } else if (toggler1 == 1) {
        HiddenScr[4][randint(0, 3)] = 1
        if (toggler2 == 2) {
            HiddenScr[randint(0, 1)][0] = 1
        } else if (toggler2 == 0) {
            HiddenScr[randint(0, 1)][4] = 1
        } else {
            HiddenScr[0][randint(0, 3)] = 1
        }
    } else {
        HiddenScr[randint(0, 3)][4] = 1
        if (toggler2 == 3) {
            HiddenScr[0][randint(0, 1)] = 1
        } else if (toggler2 == 1) {
            HiddenScr[4][randint(0, 1)] = 1
        } else {
            HiddenScr[randint(0, 3)][0] = 1
        }
    }
    toggler1 = 0
    toggler2 = 0
}
function SetThreeShips () {
    for (let index = 0; index < 3; index++) {
        cnt = -1
        cnt1 = -1
        while (y + cnt >= 0 && y + cnt <= 4 && (x + cnt1 >= 0 && x + cnt1 <= 4)) {
            while (cnt1 < 2) {
                if (true) {
                    playerScr[y + cnt][x + cnt1] = 0
                }
            }
        }
    }
    cnt = 0
    cnt1 = 0
}
let toggler2 = 0
let toggler1 = 0
let HiddenScr: number[][] = []
let playerScr: number[][] = []
let cnt1 = 0
let cnt = 0
let y = 0
let x = 0
x = 0
y = 0
cnt = 0
cnt1 = 0
for (let index = 0; index < 5; index++) {
    playerScr.push([0, 0, 0, 0, 0])
    HiddenScr.push([0, 0, 0, 0, 0])
}
