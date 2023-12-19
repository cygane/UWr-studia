#include "extra_functions.h++"

double length(Point a, Point b)
{
    double b1 = (b.getX() - a.getX());
    double b2 = (b.getY() - a.getY());

    return sqrt(pow(b1,2) + pow(b2,2));
}

//globalne liczenie pola jest mi potrzebne do sprawdzenia, czy punkt nalezy do trojkata
double pole_g(Point a, Point b, Point c)
{
    double p = 0.5 * abs((b.getX() - a.getX()) * (c.getY() - a.getY()) - (b.getY() - a.getY()) * (c.getX() - a.getX()));
    return p;
}
bool parallel(Segment a, Segment b)
{
    double a1 = (a.getbY() - a.getaY())/(a.getbX() - a.getbX());
    double a2 = (b.getbY() - b.getaY())/(b.getbX() - b.getbX());
    if (a1 == a2) return true;
    else return false;
}

bool perpendicular(Segment a, Segment b)
{
    double a1 = (a.getbY() - a.getaY())/(a.getbX() - a.getbX());
    double a2 = (b.getbY() - b.getaY())/(b.getbX() - b.getbX());
    if (a1 * a2 == (-1)) return true;
    else return false;
}
bool one_in_another(Triangle a, Triangle b)
{
    Point x;
    x.setX(b.gettaX());
    x.setY(b.gettaY());
    Point y;
    y.setX(b.gettbX());
    y.setY(b.gettbY());
    Point z;
    z.setX(b.gettcX());
    z.setY(b.gettcY());
    Point d;
    d.setX(a.gettaX());
    d.setY(a.gettaY());
    Point e;
    e.setX(a.gettbX());
    e.setY(a.gettbY());
    Point f;
    f.setX(a.gettcX());
    f.setY(a.gettcY());
    if (a.inside(x) and a.inside(y) and a.inside(z)) return true;
    else if (b.inside(d) and b.inside(e) and b.inside(f)) return true;
    else return false;

}

bool separable(Triangle a ,Triangle b)
{
    Point x;
    x.setX(b.gettaX());
    x.setY(b.gettaY());
    Point y;
    y.setX(b.gettbX());
    y.setY(b.gettbY());
    Point z;
    z.setX(b.gettcX());
    z.setY(b.gettcY());
    Point d;
    d.setX(a.gettaX());
    d.setY(a.gettaY());
    Point e;
    e.setX(a.gettbX());
    e.setY(a.gettbY());
    Point f;
    f.setX(a.gettcX());
    f.setY(a.gettcY());
    if (a.inside(x) or a.inside(y) or a.inside(z)) return false;
    else if (b.inside(d) or b.inside(e) or b.inside(f)) return false;
    else return true;
}


