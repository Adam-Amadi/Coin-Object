const mainbody = document.querySelector('body')
document.write ("COIN OBJECT")

/* 1. Randomly set your coin object's "state" property to be either 
0 or 1: use "this.state" to access the "state" property on this object.*/
let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2);
    },
    /* 2. Return the string "Heads" or "Tails", depending on whether
    "this.state" is 0 or 1. */
    toString: function () {
        if (this.state === 0) {
            return "Heads"
        } else {
            return "Tails"
        }
    },
    /* 3. Set the properties of this image element to show either face-up
    or face-down, depending on whether this.state is 0 or 1.*/
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = './images/head.png'
        } else {
            image.src = './images/tails.png'
        }
        return image;
    }
};

    function display20Flips() {
     for (let i = 0; i < 20; i += 1) {
        let strResult = coin.toString()
        coin.flip()
        mainbody.append(strResult);
    }
}

    function display20Images() {
     for (let i = 0; i < 20; i += 1) {
        let resultHtml = coin.toHTML()
        coin.flip()
        mainbody.append(resultHtml)
    }
}
display20Images()
display20Flips()