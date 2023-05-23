class Father {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayLastName(){
        return this.lastName
    }
}

class Son extends Father {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }

    displaySonName(){
        console.log(this.sname + this.displayLastName())
    }
}

class Daughter extends Father{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
    displayDName(){
        console.log(this.dname + this.displayLastName())
    }

}

let chinmay = new Son("shirish","deshpande","chinmay")
let gauri = new Daughter("shrish","deshpande","gauri")

chinmay.displaySonName()
//chinmay.displayLastName()
gauri.displayDName()
