function polishNotation(strExpr) {
    const stack = []
    let result = []
    let isLastNum = false
    for(let i = 0; i < strExpr.length; ++i) {
        switch(strExpr[i]) {
            case '+': {
                if (
                    stack[stack.length - 1] === '-' || 
                    stack[stack.length - 1] === '+' ||
                    stack[stack.length - 1] === '*' ||
                    stack[stack.length - 1] === '/'
                ) {
                    result.push(stack.pop())
                } 
                stack.push('+')  
                isLastNum = false
                break
            }
            case '-': {
                if (
                    stack[stack.length - 1] === '-' || 
                    stack[stack.length - 1] === '+' ||
                    stack[stack.length - 1] === '*' ||
                    stack[stack.length - 1] === '/'
                ) {
                    result.push(stack.pop())
                } 
                stack.push('-')  
                isLastNum = false
                break
            }
            case '*': {
                if (stack[stack.length - 1] === '/' || stack[stack.length - 1] === '*') {
                    result.push(stack.pop())
                }
                stack.push('*')  
                isLastNum = false
                break
            }
            case '/': {
                if (stack[stack.length - 1] === '/' || stack[stack.length - 1] === '*') {
                    result.push(stack.pop())
                } 
                stack.push('/') 
                isLastNum = false 
                break
            }
            case '(': {
                stack.push('(')
                isLastNum = false
                break
            }
            case ')': {
                while(stack[stack.length - 1] !== '(') {
                    result.push(stack.pop())
                }
                stack.pop()
                isLastNum = false
                break
            }
            default: {
                if (isLastNum) {
                    result.push(parseInt(result.pop().toString() + strExpr[i]))
                } else {
                    result.push(parseInt(strExpr[i]))
                }
                isLastNum = true
                break
            }
        }
    }
    for(; stack.length;) {
        result.push(stack.pop())
    }
    return result
}

export default polishNotation