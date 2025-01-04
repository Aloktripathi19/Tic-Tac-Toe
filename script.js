let f = true
let br = document.getElementsByTagName("button")
function fun(button) {
    //console.log(f)
    if (button.innerHTML == "") {
        if (f) {
            button.innerHTML = "X"
            f = !f
        } else {
            button.innerHTML = "O"
            f = !f
        }
        win()
    }
}

function win() {
    if (
        (br[0].innerHTML === br[1].innerHTML && br[1].innerHTML === br[2].innerHTML && br[0].innerHTML !== "") ||
        (br[3].innerHTML === br[4].innerHTML && br[4].innerHTML === br[5].innerHTML && br[3].innerHTML !== "") ||
        (br[6].innerHTML === br[7].innerHTML && br[7].innerHTML === br[8].innerHTML && br[6].innerHTML !== "") ||

        (br[0].innerHTML === br[3].innerHTML && br[3].innerHTML === br[6].innerHTML && br[0].innerHTML !== "") ||
        (br[1].innerHTML === br[4].innerHTML && br[4].innerHTML === br[7].innerHTML && br[1].innerHTML !== "") ||
        (br[2].innerHTML === br[5].innerHTML && br[5].innerHTML === br[8].innerHTML && br[2].innerHTML !== "") ||

        (br[0].innerHTML === br[4].innerHTML && br[4].innerHTML === br[8].innerHTML && br[0].innerHTML !== "") ||
        (br[2].innerHTML === br[4].innerHTML && br[4].innerHTML === br[6].innerHTML && br[2].innerHTML !== "")
    ) {
        let winner = f ? "O wins the match" : "X wins the match"
        setTimeout(function () {
            alert(winner)
            reset()
        }, 100)
    }
    else {
        let tie = true
        for (let i = 0; i < br.length; i++) {
            if (br[i].innerHTML == "") {
                tie = false
                break
            }
        }

        if (tie) {
            setTimeout(function () {
                alert("It's a tie!")
                reset()
            }, 100)
        }
    }
}

function reset() {
    for (let i = 0; i < br.length; i++) {
        br[i].innerHTML = ""
        f = true
    }
}
