const titles =[]
  
function getTheTitles(books){
    for (let i=0; i<books.length; i++){
        titles.push(books[i].title);
    }

    console.log(titles);
    return titles
}
/*
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

getTheTitles(books);
*/