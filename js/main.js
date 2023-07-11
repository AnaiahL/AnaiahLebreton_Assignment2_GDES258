var client = contentful.createClient({
    space: 'doyjwr20uabj',
    accessToken: 'NI7HlCvsDyGYB5yh6M2icdnKoArCozMGeozmCi9oKGw',
  });

// retrieving items from contentful
client.getEntries({content_type: 'anaiahLebreton'}).then(function (entries) {
    // looping through each entry
    entries.items.forEach(function (entry) {
      var item = document.createElement("div");
      item.classList.add("item");
    
      //calling project titles
      var projectTitle = document.createElement("h2");
      projectTitle.innerHTML = entry.fields.projectTitle;
      item.append(projectTitle);

      //calling project cover images and preventing the site from crashing
      if (entry.fields.coverImage){
        var coverImage = document.createElement("img");
        coverImage.src = entry.fields.coverImage.fields.file.url;
        coverImage.classList.add("cover-image");
        item.append(coverImage);
      }

      //calling project descriptions
      var description = document.createElement("p");
      description.innerHTML = entry.fields.description;
      item.append(description);

      //calling project creation dates
      var creationDate = document.createElement("p");
      creationDate.innerHtml = entry.fields.creationDate;
      item.append(creationDate);

      //calling details
      var getDetails = document.createElement("a");
      getDetails.innerHTML = "See Full";
      getDetails.classList.add("seefull")
      getDetails.href = "details.html?id=" + entry.sys.id;
      
      item.append(getDetails);


      document.getElementById("place-for-content").append(item);
      console.log("title: " + entry.fields.projectTitle);
      console.log("Descr: " + entry.fields.description);
      console.log("creationDate: " + entry.fields.creationDate);
      console.log(entry.fields.coverImage.fields.file.url);
    });
  });


