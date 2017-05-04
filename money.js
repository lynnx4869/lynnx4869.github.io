(() => {

    function snow(left, height, src) {
        let div = document.createElement('div');
        let img = document.createElement('img');

        $(div).css({
                left: left + 'px',
                height: height + 'px'
            })
            .addClass('fix');
        $(img).addClass('roll')
            .attr('src', src);

        $(div).append(img);
        $('.container').append(div);

        setTimeout(() => {
            $(div).remove();
        }, 5000);
    }

    setInterval(() => {
        let left = Math.random() * window.innerWidth;
        let height = Math.random() * window.innerHeight;
        let src = './apple.png';
        snow(left, height, src);
    }, 500);

})();