const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("skill-anim");
            return
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill').forEach(elem=>{
        observer.observe(elem);

        elem.addEventListener('animationend', function () {
            elem.classList.remove('skill-anim');
        });
    })
})
