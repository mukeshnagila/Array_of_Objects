////Question No .1 ////

function question1(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
          let ans=studentRecords.map((item) => item.name.toUpperCase())
        alert(ans)
}


////Question No .2 ////

function question2(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
          let ans2=studentRecords.filter((item) => item.marks>50)
         console.log(ans2)
}


////Question No .3 ////

function question3(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
          let ans3=studentRecords.filter((item) => item.marks>50 && item.id>120)
         console.log(ans3)
}


////Question No .4 ////

function question4(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
          let ans4 = 0
          studentRecords.map((item) => ans4+= item.marks)
         alert(ans4)
}


////Question No .5 ////

function question5(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
          let ans2=studentRecords.filter((item) => item.marks>50)
          let ans5= ans2.map(student => student.name);
         alert(ans5);
}

////Question No .6 ////

function question6(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          
          let ans6 = 0
          studentRecords.filter((item) =>item.id>120).map((item)=>ans6 += item.marks)
          
          alert(ans6);
}

////Question No .7 ////

function question7(){
    let studentRecords = [ {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } ] 
    
    let ans7 = 0
    let studentplusMarks = studentRecords.map((item)=>{
        if(item.marks<50)
              item.marks += 15
                return item
    }).map((item)=>item.marks > 50? ans7 += item.marks:null)
    alert(ans7)
}

////Question No .8 ////

function question8(){
    const student1 = {
        name: "Ram",
        class: "12th",
        rollNo: 11,
      };
      
      const student2 = {
        name: "Shyam",
        class: "11th",
        rollNo: 10,
      };
      
      const student3 = {
        name: "Heera",
        class: "10th",
        rollNo: 9,
      };
      
      const student4 = {
        name: "Moti",
        class: "9th",
        rollNo: 8,
      };
      
      const student5 = {
        name: "Bahubali",
        class: "8th",
        rollNo: 7,
      };
      
      const student6 = {
        name: "Kattappa",
        class: "7th",
        rollNo: 6,
      };
      
      const students = [student1, student2, student3, student4, student5, student6];
      
      console.log("Name:", students[0].name);
      console.log("Class:", students[0].class);
      console.log("Roll No:", students[0].rollNo);
}