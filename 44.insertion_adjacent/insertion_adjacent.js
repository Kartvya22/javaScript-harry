let first = document.getElementById("first")

// elem.insertAdjacentHTML method is used to insert HTML.
// it has two patameter. first parameter is a code word, specifying where to insert and second parameter is an HTML content(string)

first.insertAdjacentHTML('beforebegin','<div class="test"> beforebegin </div>')
// it's add the content before the begin aetle k element ni bar addine j
first.insertAdjacentHTML('afterbegin','<div class="test"> afterbegin </div>')
// it's add the content after the begin aetle k element ni andar j starting ma
first.insertAdjacentHTML('beforeend','<div class="test"> beforeend </div>')
// it's add the content  before the end aetle k element ni andar j ending ma 
first.insertAdjacentHTML('afterend','<div class="test"> afterend </div>')
// it's add the content after the end aetle k element ni bar addine j


// elem.insertAdjacentText method is used to insert content as text.
// it has two patameter. first parameter is a code word, specifying where to insert and second parameter is an text(content is as text)

first.insertAdjacentText('beforebegin','<div class="test"> beforebegin </div>')
// it's add the content before the begin aetle k element ni bar addine j
first.insertAdjacentText('afterbegin','<div class="test"> afterbegin </div>')
// it's add the content after the begin aetle k element ni andar j starting ma
first.insertAdjacentText('beforeend','<div class="test"> beforeend </div>')
// it's add the content  before the end aetle k element ni andar j ending ma 
first.insertAdjacentText('afterend','<div class="test"> afterend </div>')
// it's add the content after the end aetle k element ni bar addine j



let a = document.getElementsByClassName("hello-1")[0]

// remove() method is used to remove the content of HTML
a.remove()
// its remove the div element which have class name hello-1
