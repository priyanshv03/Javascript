// let html;
// html = "<h1> this isAA heading</h1>" +
//     "<p> This is a paragraph</p>";
// // console.log(html);
// html = html.concat('this', 'str2',' str3');
// console.log(html);
// // console.log(html.length);
// // console.log(html.toLowerCase())
// // console.log(html.toUpperCase())
// // console.log(html.endsWith("str3"))
// // console.log(html.includes("paragraphu"))
// // console.log(html.substring(0, 6))
// // console.log(html.slice(-9))
// console.log(html.split(' >'))

// console.log(html.replace('>','<jnscnij'))

// let fruit1 ="Orange"
// let Fruit2 ="Apple"
// let myHtml = `hello ${fruit1}
// <h1> this isAA heading</h1>
// <p> This is ${fruit1 + " " + Fruit2} a paragraph</p>
// <ul>
//     <li>Priyansh</li>
//     <li>Rahul</li>
//     <li>Jaggu</li>
// </ul>`;  
// document.body.innerHTML = myHtml;

// <-------------------------------------------------------->

// let arr = [2, 3, 2, 23, 3, 14, 13, 2];
// console.log(arr)
// console.log(arr.length);
// console.log(arr.indexOf(23))
// let arr2 = arr.sort()
// arr.reverse()
// arr.push(679)
// // arr.pop()
// arr.unshift(90)
// arr.shift()
// let arr2=arr.splice(2,5)
// let arr2=arr.slice(2,5)

// console.log(arr2);
// <-------------------------------------------------------->

// let myobj = {
//     name: 'harry',
//     class: 12,
//     isActive: true,
//     marks: [23,32,43]
// }
// console.log(myobj["name"]);

// var person = {name: "Harry", language: "JavaScript", age: 20};
// Loop through all the properties in the object  
// for(var i in person) {  
// console.log(i); 
// }
// let xyz = 0;
// function priyansh(name) {  
//    let xyz=name   //anything

//     return xyz;
// }
// console.log(priyansh("rahul"))

// let person = {
//     firstName:"rahul",
//     lastName: "Verma",
//     age: function(age) {
//         return 2 * this.age;
//     }

// }
// console.log(person.age)

// let a = window; 

// a.alert("hello")
// a = prompt('this will distripy');
// console.log(a);

// let a = document.all;
// Array.from(a).forEach(function (element) {
//     console.log(element);
// })
    
// a = document.images;
// a=document.scrip ts
// console.log(a)



// let e = document.getElementById('myfirst')
// e = e.className;
// e = e.parentNode;
// e.style.color="red"   
// e.innerHTML="<h4>hello kdovk</h4>"
// console.log(e)

// let a = 'code';

// let ref;
// let links = document.links;
// Array.from(links).forEach(function (element) {
//     ref = element.href;
//     if (ref.includes(a)) console.log(ref);

// })

// console.log(document.links[0])
// console.log(c)

//  let e = document.getElementById("myfirst")
// e = e.id;
// e = e.childNodes;
// e =e.parentElement

// let sel = document.querySelector('#myfirst')
//      sel = document.querySelector('.child')
//  sel = document.querySelector("div")
// sel.style.color = 'blue';
// console.log(sel)
 


let elem = document.getElementsByClassName('child');
elem = document.getElementsByTagName('div')

Array.from(elem).forEach(function (element) {
    

})

console.log(elem)