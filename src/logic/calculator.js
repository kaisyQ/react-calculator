function calculateRPN(RPNStr) {
    const stack = []

    for(let i = 0; i < RPNStr.length; ++i) {
        switch(RPNStr[i]) {
            case '+': {
                stack.push(parseInt(stack.pop()) + parseInt(stack.pop()))
                break
            }
            case '-': {
                stack.push(-(parseInt(stack.pop()) - parseInt(stack.pop())))
                break
            }
            case '*': {
                stack.push(parseInt(stack.pop()) * parseInt(stack.pop()))
                break
            }
            case '/': {
                stack.push(1 / (parseInt(stack.pop()) / parseInt(stack.pop())))
                break
            }
            default: {
                stack.push(parseInt(RPNStr[i]))
                console.log(stack)
                break
            }
        }
    }
    return stack.pop()
}

export default calculateRPN