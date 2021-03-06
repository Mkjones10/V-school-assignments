var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
 
const people = peopleArray.filter(function(p){
    if(p.age >18){
        return p
    }
})
        
    
people.sort((a,b)=>{
    if(a.lastName > b.lastName){
        return 1;
    }
    else if(a.lastName<b.lastName){
        return -1
    }
    else{
        return 0;
    }
})
      
const sorted =  people.reduce((final, current)=>{
    final.push("<li>" + current.firstName +" " + current.lastName + " is " + current. age +"</li>" )
    return final
},[])

    
console.log(sorted)
