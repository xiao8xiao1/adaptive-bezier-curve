import Svg_d_to_points from './libs/Svg_d_to_points'


var d="M11.5,146.5l63,46c0,0,24,41,76,42s80-10,104-39s102-92,102-92l117,49l67,90\
l152,15c0,0,80,8,120-61s105-79,111-25s60,132,82,47s73-44,77,2s87-2,87-2l43,15l94,46.5l65-88.25 h-200 v-200"

var points = Svg_d_to_points(d);
draw(points)

function draw(points) {
    var scale = 1

    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");

    ctx.save()
    ctx.scale(scale, scale)

    ctx.beginPath()
    ctx.moveTo(points[1].x, points[1].y)
    for (var i = 2; i < points.length; ++i){
        if (points[i].x)
            ctx.lineTo(points[i].x, points[i].y)
    }
    ctx.lineWidth = 4
    ctx.strokeStyle = 'red'
    ctx.stroke()

    ctx.strokeStyle = '#000'
    var r = 3
    points.forEach(function(p) {
        if (p.length === 2)
            ctx.fillRect(p.x-r/2,p.y-r/2, r, r)
    })
    ctx.restore()
}