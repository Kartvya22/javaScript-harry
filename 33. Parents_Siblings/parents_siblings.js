

console.log(document.body.firstChild)
// here it return firstChild of body and it's div
// jo body and firstChild vachhe aek pan space hase to ae firstChild return nai kare

let a = document.body.firstChild // div tag
console.log(a.parentNode) 
// parentNode ae game te node means k comment Node hoy to pan return kari de chhe
// div tag no parent Node  aetle k body
console.log(a.parentElement)
// parentElement ae valid element hoy to j return kare chhe nai to null return kare
// div tag no parent Element ae body chhe so body return karse

// .nextSibling vade aapde aena pachhal no sibling access kari sakiae
console.log(a.firstChild.nextSibling)
// ahiya a.firstChild aetle k first div and aeno nextSibling aetle k second div

// .previousSibling vade aapde aena aagal no sibling access kari sakiae 
console.log(a.lastChild.previousSibling)
// ahiya a.lastChild aetle k second div and aneo previousSibling aetle k first div