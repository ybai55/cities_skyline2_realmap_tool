function compute_dis(p1, p2) {
    var textPos = p1.divideBy(2).add(p2.divideBy(2));
    var distance = Math.round(p1.distance(p2));
    // var path = [p1,p2];
    // line.setPath(path);
    // text.setText('两点相距'+distance+'米')
    return distance
}