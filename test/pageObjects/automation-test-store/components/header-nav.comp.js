class HeaderNavComponent {
    get cartLink() {
        return $("//span[text()='Cart']");
    }
}


export default new HeaderNavComponent();