var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: 'doyjwr20uabj',
    accessToken: 'NI7HlCvsDyGYB5yh6M2icdnKoArCozMGeozmCi9oKGw',
    })

    client.getEntry(id).then(function (entry) {
    var projectTitle = document.createElement("h2");
    projectTitle.innerHTML = entry.fields.projectTitle;
    
    var detailsContent = document.getElementById("details-content");
    detailsContent.append(projectTitle)
    console.log(entry);
    var gallery = document.createElement('div');
    document.getElementById("details-content").append(gallery);

    console.log(entry.fields.creationDate);
    entry.fields.gallery.forEach(function (galleryImage) {
        console.log(galleryImage);
        var image = document.createElement("img");
        image.src = galleryImage.fields.file.url;
        gallery.append(image);
    })

    var creationDate=document.createElement('p');
    creationDate.innerHTML= entry.fields.creationDate;
    detailsContent.appendChild(creationDate);

})
