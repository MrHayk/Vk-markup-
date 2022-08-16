const allSquares = document.querySelectorAll(".col");
const container = document.querySelector(".container");


container.addEventListener("click", (event) => {
    // .classList.contains(className);
    const isClickedElementsquare = event.target.parentNode.classList.contains("row")
    if (isClickedElementsquare && event.target.nextElementSibling) {
        swappingNode(event.target, event.target.nextElementSibling);
        event.target.style.backgroundColor = "green"
        event.target.nextElementSibling.style.backgroundColor = "rgb(150, 71, 11)"
    }else if (isClickedElementsquare && !event.target.nextElementSibling) {
        swappingNode(event.target, event.target.parentNode.firstChild)
        event.target.style.backgroundColor = "green"
        event.target.parentNode.firstChild.style.backgroundColor = "rgb(150, 71, 11)"
    }
});

function swappingNode(node1, node2) {
    const thirdElement = node2.nextElementSibling;
    const leftNode = node1;
    node1.replaceWith(node2)
    node2.parentNode.insertBefore(leftNode, thirdElement)
    // insertBefore(newNode, referenceNode);
}