const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("skill-anim");
            return
        }
        entry.target.classList.remove("skill-anim");
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill').forEach(elem=>{
        observer.observe(elem);
    })
})
