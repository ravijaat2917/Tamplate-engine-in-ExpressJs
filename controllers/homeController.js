const homeController = (req,res) =>{
    // res.send('Home Page');
    res.render('index' , {name:"Ravi" ,link:'Click Here For About Page.'});  // Syntax : <%=  %>
}

export  {homeController};