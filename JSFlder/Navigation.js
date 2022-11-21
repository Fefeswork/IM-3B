const pages = [
    { url: "index.html", name: "Home", id: "home" },
    { url: "Blogs.html", name: "Blog", id: "blog" },
    { url: "Design.html", name: "Design", id: "design" },
    { url: "Data.html", name: "Data", id: "data" },
   
];


let navigationContainer = document.getElementById("nav-list");

pages.forEach(element => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.innerText = element.name;

    link.onclick= function() {
        link.href = element.url;
    }

    link.id = element.id;
   
    if (element.id == "data-vis") {
        const button = document.createElement("div");
        button.id = "data-vis-button";
        button.append(link);
        listItem.append(button);
    }else{
        listItem.append(link);
    }
    
    if (document.title == element.name) {
        link.classList.add("active");

        const line = document.createElement("div");
        line.classList.add("underline");

        listItem.append(line);
    }

    navigationContainer.append(listItem); 
  
});