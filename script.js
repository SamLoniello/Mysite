function showContent(contentId) {
    // Hide all content sections
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // Show the selected content section
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = "block";
    }
}
