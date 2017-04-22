(function(window,$){
    var Tab = function(el){
        this.el = $(el).eq(0);
        this.tabItems = this.el.find('.tab-nav li');
        this.contentItems = this.el.find('.content-wrap .content-item');
        this.bindEffect();
        this.init();
    };
    Tab.prototype.bindEffect = function(eventType){
        var that = this;
        eventType = eventType || 'click';
        console.log(eventType)
        this.tabItems.on(eventType,function(){
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            that.contentItems.eq(index).addClass('current').siblings().removeClass('current');
        })
    };
    
    Tab.prototype.init = function(eventType){
        eventType = eventType || 'click';
        this.tabItems.eq(0).trigger(eventType);
    };
    window.Tab = Tab;

    var customTab = function(el,eventType){
        this.eventType = eventType;
        Tab.call(this,el);
        this.myBindEffect();
        this.myInit();
    }

    customTab.prototype = new Tab();

    customTab.prototype.myBindEffect = function(){
        this.bindEffect(this.eventType);
    }

    customTab.prototype.myInit = function(){
        this.init(this.eventType);
    };

    window.customTab = customTab;
})(window,jQuery);