function bookSearch() {
    var search = document.getElementById('search').value
    document.getElementById('results').innerHTML = " "
    console.log(search)
    $.ajax ({
        url:"https://www.googleapis.com/books/v1/volumes?q="+search,
        dataType:"json",

        success: function(data) {
            for(i =0 ;i < data.items.length ;i++)
                {
                    results.innerHTML +='<div class="card col-6 mt-4 mr-3"> '+'<img class="img-card-top img-book"  src="'+data.items[i].volumeInfo.imageLinks.thumbnail+'" />'
                    +'<div class="card-body">'+'<h2 class="card-title">'+data.items[i].volumeInfo.title+"</h2>"+
                    '<h3 class="card-text">'+data.items[i].volumeInfo.authors+"</h3>"+
                    '<button class="btn btn-outline-secondary"><a  href="'+data.items[i].volumeInfo.previewLink+'"> <span>xem sách</span> </a></button>'+
                    '</div>'
                    '</div>'
                }
        },

        type: 'GET'
    });
}
document.getElementById('btn').addEventListener('click', bookSearch, false)