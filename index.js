const userData = [
    {
      empid: 10001,
      mobile: "8989989898",
      city: "Hyderabad",
      fname: "Neha",
      lname: "Patil",
      email: "asad@gmail.com",
    },
    {
      empid: 10002,
      mobile: "898998****",
      city: "Pune",
      fname: "Shaikh",
      lname: "Faizan",
      email: "faizan@gmail.com",
    },
    {
      empid: 10003,
      mobile: "898998****",
      city: "Pune",
      fname: "Priya",
      lname: "kumar",
      email: "kumar@gmail.com",
    },
    {
      empid: 10004,
      mobile: "898998****",
      city: "kolkata",
      fname: "Shaikh",
      lname: "Shoeb",
      email: "shoeb@gmail.com",
    },
    {
      empid: 10005,
      mobile: "898998****",
      city: "Nagpur",
      fname: "John",
      lname: "Marry",
      email: "john@gmail.com",
    },
    {
      empid: 10006,
      mobile: "898998****",
      city: "Nanded",
      fname: "Shaikh",
      lname: "Sameer",
      email: "sameer23@gmail.com",
    },
    {
      empid: 10007,
      mobile: "898998****",
      city: "Nanded",
      fname: "Revan",
      lname: "sidheshwar",
      email: "revan@gmail.com",
    },
    {
      empid: 10008,
      mobile: "898998****",
      city: "Nizamabad",
      fname: "Sunil",
      lname: "kamde",
      email: "sunil@gmail.com",
    },
    {
      empid: 10009,
      mobile: "898998****",
      city: "Mumbai",
      fname: "Syed",
      lname: "Wajid Ali",
      email: "wajid@gmail.com",
    },
  ];
  const mainDiv=document.getElementById("main");
  
  const generateComponent=(curr)=>{
    const divComp=document.createElement("div");
    divComp.setAttribute("class","comp");

    const empid =document.createElement("h2");
    empid.innerText=curr.empid;

    const name=document.createElement("h3");
    name.innerText=curr.fname +"-"+ curr.lname;

    const email=document.createElement("h3");
    email.innerText=curr.email

    const mobile=document.createElement("h3");
    mobile.innerText=curr.mobile;

    const city=document.createElement("h3");
    city.innerText=curr.city;

    divComp.appendChild(empid);
    divComp.appendChild(name);
    divComp.appendChild(email);
    divComp.appendChild(mobile);
    divComp.appendChild(city);

    mainDiv.appendChild(divComp)
  }
    userData.forEach((item) => {
    generateComponent(item)
    })
