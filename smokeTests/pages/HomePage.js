var HomePage = function(){
    var menu =  element(by.css('.navbar-nav'));

    this.isMenuVisible = function () {
        console.log("Looking for Menu");
        return menu.isDisplayed();
    }
}
module.exports = new HomePage();