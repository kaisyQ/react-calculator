function polishNotation(strExpr) {
    const stack = []
    let result = ''
    for(let i = 0; i < strExpr.length; ++i) {
        switch(strExpr[i]) {
            case '+': {
                if (
                    stack[stack.length - 1] === '-' || 
                    stack[stack.length - 1] === '+' ||
                    stack[stack.length - 1] === '*' ||
                    stack[stack.length - 1] === '/'
                ) {
                    result += stack.pop()
                } 
                stack.push('+')  
                break
            }
            case '-': {
                if (
                    stack[stack.length - 1] === '-' || 
                    stack[stack.length - 1] === '+' ||
                    stack[stack.length - 1] === '*' ||
                    stack[stack.length - 1] === '/'
                ) {
                    result += stack.pop()
                } 
                stack.push('-')  
                break
            }
            case '*': {
                if (stack[stack.length - 1] === '/' || stack[stack.length - 1] === '*') {
                    result += stack.pop()
                }
                stack.push('*')  
                break
            }
            case '/': {
                if (stack[stack.length - 1] === '/' || stack[stack.length - 1] === '*') {
                    result += stack.pop()
                } 
                stack.push('/')  
                break
            }
            case '(': {
                stack.push('(')
                break
            }
            case ')': {
                while(stack[stack.length - 1] !== '(') {
                    result += stack.pop()
                }
                stack.pop()
                break
            }
            default: {
                result += strExpr[i]
                break
            }
        }
    }
    for(; stack.length;) {
        result += stack.pop()
    }
    return result
}


export default polishNotation