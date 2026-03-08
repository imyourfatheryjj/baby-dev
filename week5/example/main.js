const inputAmount = document.querySelector("#input-amount")
const outputAmount = document.querySelector("#output-amount")

const tokenA = document.querySelector("#tokenA")
const tokenB = document.querySelector("#tokenB")

const switchBtn = document.querySelector("#switch")

let price = 3500

/* 输入 A 自动计算 B */

inputAmount.oninput = () => {

    const value = inputAmount.value

    outputAmount.value = value * price

}

/* Swap 方向 */

switchBtn.onclick = () => {

    const temp = tokenA.innerText
    tokenA.innerText = tokenB.innerText
    tokenB.innerText = temp

}