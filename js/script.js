var stage, controller;

var minimum_cell_size = 30;
var maximum_grid_size = 100;

function init() {
    // Do not use this for now...
    // createjs.MotionGuidePlugin.install();

    controller = new Controller;

    resize();

    controller.start_game();

    var p2 = new Particle({x: 3, y: 3});
    p2.start_time = createjs.Ticker.getTime();
    p2.target = {
        time: p2.start_time + 1000,
        x: 10,
        y: 7
    }
    var p2v = new ParticleView(p2);
    controller.add_view(p2v);
}

function resize() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    if((height / minimum_cell_size) > maximum_grid_size){
        window.cell_size = height / maximum_grid_size;
        controller.grid_size.y = maximum_grid_size;
    } else {
        controller.grid_size.y = Math.floor(height / minimum_cell_size);
        window.cell_size = minimum_cell_size;
    }
    if((width / minimum_cell_size) > maximum_grid_size){
        window.cell_size = width / maximum_grid_size;
        controller.grid_size.y = maximum_grid_size;
    } else {
        controller.grid_size.x = Math.floor(width / minimum_cell_size);
        window.cell_size = minimum_cell_size;
    }
    controller.stage.canvas.width = width;
    controller.stage.canvas.height = height;
}