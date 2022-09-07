document.addEventListener("DOMContentLoaded", e=>{
    e.preventDefault()
    /* DOM, les propriétés, valeurs par défaut */
    const user =({
        main_title: "Cours animation and js",
        main_date_document: new Date(),
        el: document.querySelector("title")
    })
    user.el.innerText = user.main_title
    user.footer.innerText += ` &{user.main_date_document.getFullYear()}`
    console.log(typeof user)
    console.log(`${user.main_title}) \n ${user.main_date_document}`)
})