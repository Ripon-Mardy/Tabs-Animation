// === selected all elements
const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {

        tabs.forEach(tab => {
            tab.classList.remove('active')
        }) // end another forEach

        tab.classList.add('active')

        let line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + 'px'
        line.style.left = e.target.offsetLeft + 'px'
        console.log(e)

        all_content.forEach(content => {
            content.classList.remove('active')
        })
        all_content[index].classList.add('active')
    }) // end addEventListener
}) // end forEach