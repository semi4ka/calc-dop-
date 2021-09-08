export const mathAction=(operator, res, b)=>{
    switch (operator) {
      case '+':
        console.log('res+b',res+b);
        return res+b; 
      case '-':
        console.log('res-b',res-b);
        
        return res-b;
      case '/':
        console.log('res/b',res/b);
        
        return res/b;
        case '*':
          console.log('res*b',res*b);
        
          return res*b;
    
      default:
        console.log('def')
        break;
    }
   }