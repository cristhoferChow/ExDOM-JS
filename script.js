function mudarDiv() {
    let divs = document.querySelectorAll("div")
    let body = document.body

    divs.forEach(div => {
        let p = document.createElement("p")
        p.innerHTML = div.innerHTML
        body.replaceChild(p, div)
    })
}

function removerLi() {
    document.querySelectorAll("#ul2 li").forEach(li => {
        ul2.removeChild(li)
    })
}

function removerTodas() {
    document.querySelectorAll("body li").forEach(li => {
        li.remove()
    })
}