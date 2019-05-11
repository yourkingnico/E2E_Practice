var Timeline = function(){
    var timelineLabel =  element(by.css('#timeline.home-titles'));
    var lastTimeline = element(by.css('.timeline .timeline-inverted:last-child'));
    var firstTimeline = element(by.css('.timeline :first-child .timeline-image'));

    this.isTimelineLabelVisible = function () {
        return timelineLabel.isDisplayed();
    }

    this.isTimelineVisible = function () {
        //check if first and last are visible
        return lastTimeline.isDisplayed() && firstTimeline.isDisplayed();
    }
}
module.exports = new Timeline();