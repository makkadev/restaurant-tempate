const accordionsButtons = document.querySelectorAll('.accordion');
const accordionContent = document.querySelectorAll('.accordion-content');

accordionsButtons.forEach((btn) => {
    function toggle() {
        const content = btn.children[1];
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            accordionContent.forEach((contentDiv) => {
                contentDiv.style.maxHeight = null;
            });
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
    btn.addEventListener('click', toggle);
})