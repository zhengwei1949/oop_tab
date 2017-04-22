(function(window,$){
    var Tab = function(el){
        this.el = $(el).eq(0);
        this.tabItems = this.el.find('.tab-nav li');
        this.contentItems = this.el.find('.content-wrap .content-item');
        this.bindEffect();
        this.init();
    };
    Tab.prototype.bindEffect = function(){
        var that = this;
        this.tabItems.on('click',function(){
            var index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            that.contentItems.eq(index).addClass('current').siblings().removeClass('current');
        })
    };
    Tab.prototype.init = function(){
        this.tabItems.eq(0).trigger('click');
    };
    window.Tab = Tab;
})(window,jQuery);